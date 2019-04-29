import * as R from "ramda";
import createReducer from "../../helpers/reducerHelper";
import * as actionTypes from "./actionTypes";

const initialState = {
  categories: []
};

const actionHandlers = {
  [actionTypes.CATEGORIES_FETCH_RECEIVE]: (state, action) => {
    return R.evolve(R.__, state)({
      categories: R.always(action.payload.data)
    });
  }
};

export default createReducer(initialState, actionHandlers);
