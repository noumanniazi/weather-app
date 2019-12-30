// src
import { SUCCESSFUL, UNSUCCESSFUL } from "../utils";

export const START_FETCHING = "start_fetching";
export const STOP_FETCHING = "stop_fetching";
export const FETCH_DATA = "fetch_data";

// Thanks for the key
const API_KEY = "75f972b80e26f14fe6c920aa6a85ad57";
const URL = `https://api.openweathermap.org/data/2.5/forecast?q=Munich,de&APPID=${API_KEY}&cnt=40&units=metric`;

export const startFetching = () => dispatch => {
  dispatch({
    type: START_FETCHING
  });
};
export const stopFetching = () => dispatch => {
  dispatch({
    type: STOP_FETCHING
  });
};
export const fetchData = () => dispatch => {
  // Fetch Logic
  return new Promise((resolve, reject) => {
    fetch(URL)
      .then(response => response.json())
      .then(response => {
        dispatch({
          type: FETCH_DATA,
          payload: response
        });
        resolve(SUCCESSFUL);
      })
      .catch(e => {
        reject(UNSUCCESSFUL);
      });
  });
};
