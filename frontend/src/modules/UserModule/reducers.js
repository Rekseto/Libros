import * as R from "ramda";
import createReducer from "../../helpers/reducerHelper";
import {
  USER_LOANS_REQUEST,
  USER_LOANS_RECEIVE,
  USER_LOANS_FAILED,
  USERS_FETCH_REQUEST,
  USERS_FETCH_RECEIVE,
  USERS_FETCH_FAILED
} from "./actionTypes";

const initialState = {
  isFetching: false,
  loans: [],
  users: [],
  error: null,
  pages: 0
};

const actionHandlers = {
  [USER_LOANS_REQUEST]: (state, action) => {
    return R.evolve(R.__, state)({
      isFetching: R.T,
      error: R.always(null)
    });
  },

  [USER_LOANS_RECEIVE]: (state, action) => {
    return R.evolve(R.__, state)({
      isFetching: R.F,
      loans: R.always(action.payload.data)
    });
  },

  [USER_LOANS_FAILED]: (state, action) => {
    return R.evolve(R.__, state)({
      isFetching: R.F,
      error: R.always(action.error)
    });
  },

  [USERS_FETCH_REQUEST]: (state, action) => {
    return R.evolve(R.__, state)({
      isFetching: R.T,
      error: R.always(null)
    });
  },

  [USERS_FETCH_RECEIVE]: (state, action) => {
    console.log(action.payload.data);
    return R.evolve(R.__, state)({
      isFetching: R.F,
      users: R.always(action.payload.data),
      pages: R.always(action.payload.pages)
    });
  },
  [USERS_FETCH_FAILED]: (state, action) => {
    return R.evolve(R.__, state)({
      isFetching: R.F,
      error: R.always(action.error)
    });
  }
};

export default createReducer(initialState, actionHandlers);
