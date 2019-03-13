import * as R from "ramda";
import createReducer from "../../../helpers/reducerHelper";

const initialState = {
  isFetching: false,
  loans: [],
  error: null
};

const actionHandlers = {
  USER_LOANS_REQUEST: (state, action) => {
    return R.evolve(R.__, state)({
      isFetching: R.T,
      error: R.always(null)
    });
  },

  USER_LOANS_RECEIVE: (state, action) => {
    return R.evolve(R.__, state)({
      isFetching: R.F,
      loans: R.always(action.payload)

    });
  },

  USER_LOANS_FAILED: (state, action) => {
    return R.evolve(R.__, state)({
      isFetching: R.F,
      error: R.always(action.error)
    });
  }
};

export default createReducer(initialState, actionHandlers);
