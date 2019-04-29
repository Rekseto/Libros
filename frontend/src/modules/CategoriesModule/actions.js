import * as actionTypes from "./actionTypes";

export const categoriesFetchRequest = () => ({
  type: actionTypes.CATEGORIES_FETCH_REQUEST
});

export const categoriesFetchReceive = json => ({
  type: actionTypes.CATEGORIES_FETCH_RECEIVE,
  payload: {
    data: json.data
  }
});

export const categoriesFetchFailed = error => ({
  type: actionTypes.CATEGORIES_FETCH_FAILED,
  error
});

/* Publisher Create Actions */

export const categoryCreateRequest = ({token, name}) => ({
  type: actionTypes.CATEGORY_CREATE_REQUEST,
  payload: {
    name
  },
  headers: {
    "Content-Type": "application/json; charset=utf-8",
    Authorization: token
  }
});

export const categoryCreateReceive = json => ({
  type: actionTypes.CATEGORY_CREATE_RECEIVE,
  payload: {
    data: json.data
  }
});

export const categoryCreateFailed = error => ({
  type: actionTypes.CATEGORY_CREATE_FAILED,
  error
});

/* Publisher Remove request */

export const categoryRemoveRequest = ({token, id}) => ({
  type: actionTypes.CATEGORY_REMOVE_REQUEST,
  payload: {
    id
  },
  headers: {
    "Content-Type": "application/json; charset=utf-8",
    Authorization: token
  }
});

export const categoryRemoveReceive = data => ({
  type: actionTypes.CATEGORY_REMOVE_RECEIVE,
  payload: {}
});

export const categoryRemoveFailed = error => ({
  type: actionTypes.CATEGORY_REMOVE_FAILED,
  error
});
