import * as R from "ramda";
import createReducer from "../../../helpers/reducerHelper";

const initialState = {

  error: null,
  book: {},

};

const actionHandlers = {
  BOOK_CREATE_REQUEST: (state, action) => {
    return R.evolve(R.__, state)({
      error: R.always(null)
    });
  },

  BOOK_CREATE_RECEIVE: (state, action) => {
    return R.evolve(R.__, state)({
    });
  },

  BOOK_CREATE_FAILED: (state, action) => {
    return R.evolve(R.__, state)({
      error: R.always(action.error)
    });
  },
  BOOK_FIND_RECEIVE: (state, action) => {
    return R.evolve(R.__, state)({
      book: R.always(action.payload)
    });
  },
  BOOK_FIND_FAILED: (state, action) => {
    return R.evolve(R.__, state)({
      error: R.always(action.error)
    });
  },
  BOOK_REMOVE_FAILED: (state, action) => {
    return R.evolve(R.__, state)({
      error: R.always(action.error)
    });
  },
};

export default createReducer(initialState, actionHandlers);
