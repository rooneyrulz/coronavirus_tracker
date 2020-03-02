import express from 'express';
import { createServer } from 'http';
import logger from 'morgan';
import { config } from 'dotenv';
import 'colors';

import reportRoute from './routes/report';

const app = express();
const server = createServer(app);

config({ path: '.env' });
app.use(logger('dev'));

app.use('/api/covid-19', reportRoute);

server.listen(process.env.PORT || 8000, () =>
  console.log(
    `server running on ${process.env.NODE_ENV} port ${process.env.PORT}..`
      .yellow.bold
  )
);

export default app;
