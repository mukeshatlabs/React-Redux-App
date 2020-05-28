import axios from 'axios';

export const FETCH_NASA_START = 'FETCH_NASA_START';
export const FETCH_NASA_SUCCESS = 'FETCH_NASA_SUCCESS';
export const FETCH_NASA_FAIL = 'FETCH_NASA_FAIL';

export const getNASA = () => dispatch => {
  dispatch({ type: FETCH_NASA_START });
  axios
    .get('https://api.nasa.gov/planetary/apod?api_key=qNxS5LO5cWvtkUg2dV1XJAMlGJy9xaLcgO03G0F3&date=2012-03-14')
    .then(res =>
      dispatch({ type: FETCH_NASA_SUCCESS, payload: res.data })
    )
    .catch(err => dispatch({ type: FETCH_NASA_FAIL, payload: err }));
};
