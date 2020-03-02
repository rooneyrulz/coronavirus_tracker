import { Router } from 'express';
import config from 'config';

import csvreader from '../csvreader';

const router = Router({ strict: true });

router.get('/confirmed', async (req, res, next) => {
  try {
    const data = await csvreader(config.get('confirmedURI'));
    if (!data || data.length < 1)
      return res
        .status(404)
        .send('corona virus confirmed reports data not found!');
    return res.status(200).json(data);
  } catch (error) {
    console.log(error.message);
    return res.status(500).send('something went wrong!');
  }
});

router.get('/deaths', async (req, res, next) => {
  try {
    const data = await csvreader(config.get('deathURI'));
    if (!data || data.length < 1)
      return res
        .status(404)
        .send('corona virus deaths reports data not found!');
    return res.status(200).json(data);
  } catch (error) {
    console.log(error.message);
    return res.status(500).send('something went wrong!');
  }
});

router.get('/recovered', async (req, res, next) => {
  try {
    const data = await csvreader(config.get('recoveredURI'));
    if (!data || data.length < 1)
      return res
        .status(404)
        .send('corona virus recovered reports data not found!');
    return res.status(200).json(data);
  } catch (error) {
    console.log(error.message);
    return res.status(500).send('something went wrong!');
  }
});

export default router;
