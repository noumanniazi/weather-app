import { STOP_FETCHING, START_FETCHING, FETCH_DATA } from "../actions";

// this is for initial load when we dont have any state
const defaultState = {
  isFetching: false,
  data: {}
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case START_FETCHING:
      return {
        ...state,
        isFetching: true
      };
    case FETCH_DATA:
      return {
        ...state,
        data: action.payload
      };
    case STOP_FETCHING:
      return {
        ...state,
        isFetching: false
      };
    default:
      return state;
  }
};

export default reducer;
