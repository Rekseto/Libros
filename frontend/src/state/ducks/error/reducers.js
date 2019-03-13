import * as R from "ramda";
import createReducer from "../../../helpers/reducerHelper";

const initialState = {
  error: null
};

const actionHandlers = {
  AUTH_LOGIN_FAILED: (state, action) => {
    return R.evolve(R.__, state)({
      error: R.always(action.error)
    });
  },
  BOOK_CREATE_FAILED: (state, action) => {
    return R.evolve(R.__, state)({
      error: R.always(action.error)
    });
  },
  LOAN_ADD_FAILED: (state, action) => {
    return R.evolve(R.__, state)({
      error: R.always(action.error)
    });
  },
  AUTH_REGISTER_FAILED: (state, action) => {
    return R.evolve(R.__, state)({
      error: R.always(action.error)
    });
  },
  BOOK_REMOVE_FAILED: (state, action) => {
    return R.evolve(R.__, state)({
      error: R.always(action.error)
    });
  },
  CATEGORIES_ADD_FAILED: (state, action) => {
    return R.evolve(R.__, state)({
      error: R.always(action.error)
    });
  },
  CATEGORIES_REMOVE_FAILED: (state, action) => {
    return R.evolve(R.__, state)({
      error: R.always(action.error)
    });
  },
  PUBLISHERS_ADD_FAILED: (state, action) => {
    return R.evolve(R.__, state)({
      error: R.always(action.error)
    });
  },
  PUBLISHERS_REMOVE_FAILED: (state, action) => {
    return R.evolve(R.__, state)({
      error: R.always(action.error)
    });
  },
  USERS_FETCH_FAILED: (state, action) => {
    return R.evolve(R.__, state)({
      error: R.always(action.error)
    });
  }
};

export default createReducer(initialState, actionHandlers);
