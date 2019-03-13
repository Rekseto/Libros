import * as R from "ramda";
import createReducer from "../../../helpers/reducerHelper";
const initialState = {
  publishers: []
};

const actionHandlers = {
  PUBLISHERS_FETCH_RECEIVE: (state, action) => {
    return R.evolve(R.__, state)({
      publishers: R.always(action.payload)
    });
  }
};

export default createReducer(initialState, actionHandlers);
