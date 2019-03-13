import * as R from "ramda";
import createReducer from "../../../helpers/reducerHelper";

const initialState = {
  users: [],
  error: null
};

const actionHandlers = {
  USERS_FETCH_REQUEST: (state, action) => {
    return R.evolve(R.__, state)({
      error: R.always(null)
    });
  },

  USERS_FETCH_RECEIVE: (state, action) => {
    return R.evolve(R.__, state)({
      users: R.always(action.payload)
    });
  },

  USER_LOANS_FAILED: (state, action) => {
    return R.evolve(R.__, state)({
      error: R.always(action.error)
    });
  }
};

export default createReducer(initialState, actionHandlers);
