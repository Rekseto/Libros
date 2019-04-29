import * as R from "ramda";
import createReducer from "../../helpers/reducerHelper";

import * as actionTypes from "./actionTypes";

const initialState = {
  publishers: []
};

const actionHandlers = {
  [actionTypes.PUBLISHERS_FETCH_RECEIVE]: (state, action) => {
    return R.evolve(R.__, state)({
      publishers: R.always(action.payload.data)
    });
  }
};

export default createReducer(initialState, actionHandlers);
