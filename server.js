import express from 'express';
import { createServer } from 'http';
import logger from 'morgan';
import { config } from 'dotenv';
import cors from 'cors';
import path from 'path';
import 'colors';

import reportRoute from './routes/report';

const app = express();
const server = createServer(app);

config({ path: '.env' });
app.use(logger('dev'));
app.use(cors());

// app.use(express.static(path.join(__dirname, 'client', 'build')));

app.use('/api/covid-19', reportRoute);

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
// });

server.listen(process.env.PORT || 8000, () =>
  console.log(
    `server running on ${process.env.NODE_ENV} port ${process.env.PORT}..`
      .yellow.bold
  )
);

export default app;
