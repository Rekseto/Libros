export const change = (field,value) => ({
  type: "SEARCH_CHANGE",
  payload: {
    field,
    value
  }
});


export default {
  change
};
