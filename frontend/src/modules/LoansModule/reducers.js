import * as R from "ramda";
import createReducer from "../../helpers/reducerHelper";
import {
  LOAN_REMOVE_REQUEST,
  LOAN_REMOVE_RECEIVE,
  LOAN_REMOVE_FAILED,
  LOANS_FETCH_REQUEST,
  LOANS_FETCH_RECEIVE,
  LOANS_FETCH_FAILED
} from "./actionTypes";

const initialState = {
  isFetching: false,
  loans: [],
  pages: 1,
  page: 1,
  error: null
};

const actionHandlers = {
  [LOANS_FETCH_REQUEST]: (state, action) => {
    return R.evolve(R.__, state)({
      isFetching: R.T,
      error: R.always(null),
      page: R.always(action.payload.page)
    });
  },

  [LOANS_FETCH_RECEIVE]: (state, action) => {
    return R.evolve(R.__, state)({
      isFetching: R.F,
      loans: R.always(action.payload.data),
      pages: R.always(action.payload.pages)
    });
  },

  [LOANS_FETCH_FAILED]: (state, action) => {
    return R.evolve(R.__, state)({
      isFetching: R.F,
      error: R.always(action.error)
    });
  },
  [LOAN_REMOVE_REQUEST]: (state, action) => {
    return R.evolve(R.__, state)({
      isFetching: R.T,
      error: R.always(null)
    });
  },

  [LOAN_REMOVE_RECEIVE]: (state, action) => {
    return R.evolve(R.__, state)({
      isFetching: R.F
    });
  },

  [LOAN_REMOVE_FAILED]: (state, action) => {
    return R.evolve(R.__, state)({
      isFetching: R.F,
      error: R.always(action.error)
    });
  }
};

export default createReducer(initialState, actionHandlers);
