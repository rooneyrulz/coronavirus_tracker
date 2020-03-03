import {
  GET_CONFIRMED_DATA,
  GET_DEATH_DATA,
  GET_RECOVERED_DATA
} from '../actions/types';

const initialState = {
  loading: true,
  confirmedData: [],
  deathData: [],
  recoveredData: []
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_CONFIRMED_DATA:
      return {
        ...state,
        loading: false,
        confirmedData: [...payload]
      };

    case GET_DEATH_DATA:
      return {
        ...state,
        loading: false,
        deathData: [...payload]
      };

    case GET_RECOVERED_DATA:
      return {
        ...state,
        loading: false,
        recoveredData: [...payload]
      };

    default:
      return state;
  }
};
