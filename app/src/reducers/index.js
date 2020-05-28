import {
  FETCH_NASA_START,
  FETCH_NASA_SUCCESS,
  FETCH_NASA_FAIL
} from '../actions';

const initialState = {
  NASA: [],
  error: '',
  isFetching: false
};

function reducer(state = initialState, action) {
  console.log('reducer', action);
  switch (action.type) {
    case FETCH_NASA_START:
      return {
        ...state,
        isFetching: true,
        error: ''
      };
    case FETCH_NASA_SUCCESS:
      return {
        ...state,
        NASA: action.payload,
        isFetching: false,
        error: ''
      };
    case FETCH_NASA_FAIL:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
}

export default reducer;
