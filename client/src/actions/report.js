import axios from 'axios';
import {
  GET_CONFIRMED_DATA,
  GET_DEATH_DATA,
  GET_RECOVERED_DATA
} from './types';

// GET ALL CONFIRMED DATA
export const getConfirmedData = () => async dispatch => {
  const config = {
    header: {
      'Content-Types': 'application/json'
    }
  };

  try {
    const { data } = await axios.get('/api/covid-19/confirmed', config);
    dispatch({ type: GET_CONFIRMED_DATA, payload: data });
  } catch (error) {
    console.log(error);
  }
};

// GET ALL DEATH DATA
export const getDeathData = () => async dispatch => {
  const config = {
    header: {
      'Content-Types': 'application/json'
    }
  };

  try {
    const { data } = await axios.get('/api/covid-19/deaths', config);
    dispatch({ type: GET_DEATH_DATA, payload: data });
  } catch (error) {
    console.log(error);
  }
};

// GET ALL RECOVERED DATA
export const getRecoveredData = () => async dispatch => {
  const config = {
    header: {
      'Content-Types': 'application/json'
    }
  };

  try {
    const { data } = await axios.get('/api/covid-19/recovered', config);
    dispatch({ type: GET_RECOVERED_DATA, payload: data });
  } catch (error) {
    console.log(error);
  }
};
