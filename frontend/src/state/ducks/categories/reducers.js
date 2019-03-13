import * as R from "ramda";
import createReducer from "../../../helpers/reducerHelper";

const initialState = {
  categories: []
};

const actionHandlers = {
  CATEGORIES_FETCH_RECEIVE: (state, action) => {
    return R.evolve(R.__, state)({
      categories: R.always(action.payload)
    });
  }
};

export default createReducer(initialState, actionHandlers);
