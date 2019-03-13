import * as R from "ramda";
import createReducer from "../../../helpers/reducerHelper";

const initialState = {
  isFetching: false,
  books: [],
  error: null,
  pages: 1
};

const actionHandlers = {
  BOOKS_FETCH_REQUEST: (state, action) => {
    return R.evolve(R.__, state)({
      isFetching: R.T,
      error: R.always({})
    });
  },

  BOOKS_FETCH_RECEIVE: (state, action) => {
    return R.evolve(R.__, state)({
      isFetching: R.F,
      books: R.always(action.payload.data),
      pages: R.always(action.payload.pages)
    });
  },

  BOOKS_FETCH_FAILED: (state, action) => {
    return R.evolve(R.__, state)({
      isFetching: R.F,
      error: R.always(action.payload)
    });
  }
};

export default createReducer(initialState, actionHandlers);
