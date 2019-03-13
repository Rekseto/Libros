export const categoriesFetchRequest = () => ({
  type: "CATEGORIES_FETCH_REQUEST"
});

export const categoriesFetchReceive = data => ({
  type: "CATEGORIES_FETCH_RECEIVE",
  payload: data
});

export const categoriesFetchFailed = error => ({
  type: "CATEGORIES_FETCH_FAILED",
  error
});

export const categoriesAddRequest = (token, name) => ({
  type: "CATEGORIES_ADD_REQUEST",
  payload: {
    name
  },
  headers: {
    "Content-Type": "application/json; charset=utf-8",
    Authorization: token
  }
});

export const categoriesAddReceive = data => ({
  type: "CATEGORIES_ADD_RECEIVE",
  payload: data
});

export const categoriesAddFailed = error => ({
  type: "CATEGORIES_ADD_FAILED",
  error
});

export const categoriesRemoveRequest = (token, id) => ({
  type: "CATEGORIES_REMOVE_REQUEST",
  payload: {
    id
  },
  headers: {
    "Content-Type": "application/json; charset=utf-8",
    Authorization: token
  }
});

export const categoriesRemoveReceive = data => ({
  type: "CATEGORIES_REMOVE_RECEIVE",
  payload: data
});

export const categoriesRemoveFailed = error => ({
  type: "CATEGORIES_REMOVE_FAILED",
  error
});

export default {
  categoriesFetchFailed,
  categoriesFetchReceive,
  categoriesFetchRequest,

  categoriesAddRequest,
  categoriesAddReceive,
  categoriesAddFailed,

  categoriesRemoveRequest,
  categoriesRemoveReceive,
  categoriesRemoveFailed
};
