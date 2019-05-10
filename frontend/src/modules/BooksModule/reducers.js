import * as R from "ramda";
import createReducer from "../../helpers/reducerHelper";
import * as actionTypes from "./actionTypes";

const initialState = {
  isFetching: false,
  books: [],
  book: {},
  pages: 0,
  error: null,
  page: 0
};

const actionHandlers = {
  [actionTypes.BOOKS_SEARCH_REQUEST]: (state, action) => {
    return R.evolve(R.__, state)({
      isFetching: R.T,
      error: R.always(null),
      page: R.always(action.payload.page)
    });
  },

  [actionTypes.BOOKS_SEARCH_RECEIVE]: (state, action) => {
    return R.evolve(R.__, state)({
      isFetching: R.F,
      books: R.always(action.payload.data),
      pages: R.always(action.payload.pages)
    });
  },

  [actionTypes.BOOKS_SEARCH_FAILED]: (state, action) => {
    return R.evolve(R.__, state)({
      isFetching: R.F,
      error: R.always(action.payload)
    });
  },

  [actionTypes.BOOK_FETCH_RECEIVE]: (state, action) => {
    return R.evolve(R.__, state)({
      book: R.always(action.payload.data)
    });
  }
};

export default createReducer(initialState, actionHandlers);
