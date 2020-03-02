import { Router } from 'express';
import request from 'request';
import csv from 'csvtojson';

const router = Router({ strict: true });

const confirmedURI =
  'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_19-covid-Confirmed.csv';
const deathURI =
  'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_19-covid-Deaths.csv';
const recoveredURI =
  'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_19-covid-Recovered.csv';

router.get('/confirmed', async (req, res, next) => {
  try {
    const data = await csv().fromStream(request.get(confirmedURI));
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
    const data = await csv().fromStream(request.get(deathURI));
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
    const data = await csv().fromStream(request.get(recoveredURI));
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
