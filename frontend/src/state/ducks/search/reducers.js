import createReducer from "../../../helpers/reducerHelper";

const initialState = {
  author: "",
  isbn: "",
  title: "",
  publisher: "",
  category: ""
};

const actionHandlers = {
  SEARCH_CHANGE: (state, action) => {
    return {...state, [action.payload.field]: action.payload.value};
  }
};

export default createReducer(initialState, actionHandlers);
