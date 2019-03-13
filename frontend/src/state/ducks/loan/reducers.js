import * as R from "ramda";
import createReducer from "../../../helpers/reducerHelper";

const initialState = {
  loans: [],
  pages: 1
};

const actionHandlers = {
  D: (state, action) => {
    return R.evolve(R.__, state)({
      loans: action.payload.data,
      pages: action.payload.pages
    });
  }
};

export default createReducer(initialState, actionHandlers);
