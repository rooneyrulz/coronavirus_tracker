import config from 'config';
import 'colors';

import csvreader from '../csvreader';

// desc             >     get all confirmed report data
// route            >     /api/covid-19/confirmed
// access control   >     public
export const getConfirmedData = async (req, res, next) => {
  try {
    const data = await csvreader(config.get('confirmedURI'));
    if (!data || data.length < 1)
      return res
        .status(404)
        .send('corona virus confirmed reports data not found!');
    return res.status(200).json(data);
  } catch (error) {
    console.log(`${error.message}`.red);
    return res.status(500).send('something went wrong!');
  }
};

// desc             >     get all death report data
// route            >     /api/covid-19/deaths
// access control   >     public
export const getDeathData = async (req, res, next) => {
  try {
    const data = await csvreader(config.get('deathURI'));
    if (!data || data.length < 1)
      return res
        .status(404)
        .send('corona virus deaths reports data not found!');
    return res.status(200).json(data);
  } catch (error) {
    console.log(`${error.message}`.red);
    return res.status(500).send('something went wrong!');
  }
};

// desc             >     get all recovered report data
// route            >     /api/covid-19/recovered
// access control   >     public
export const getRecoveredData = async (req, res, next) => {
  try {
    const data = await csvreader(config.get('recoveredURI'));
    if (!data || data.length < 1)
      return res
        .status(404)
        .send('corona virus recovered reports data not found!');
    return res.status(200).json(data);
  } catch (error) {
    console.log(`${error.message}`.red);
    return res.status(500).send('something went wrong!');
  }
};
