import * as R from "ramda";
import createReducer from "../../../helpers/reducerHelper";

const initialState = {
  loans: [],
  pages: 1
};

const actionHandlers = {
  LOANS_FETCH_RECEIVE: (state, action) => {
    return R.evolve(R.__, state)({
      loans: R.always(action.payload.data),
      pages: R.always(action.payload.pages)
    });
  }
};

export default createReducer(initialState, actionHandlers);
