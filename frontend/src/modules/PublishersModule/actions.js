import * as actionTypes from "./actionTypes";

export const publishersFetchRequest = () => ({
  type: actionTypes.PUBLISHERS_FETCH_REQUEST
});

export const publishersFetchReceive = json => ({
  type: actionTypes.PUBLISHERS_FETCH_RECEIVE,
  payload: {
    data: json.data
  }
});

export const publishersFetchFailed = error => ({
  type: actionTypes.PUBLISHERS_FETCH_FAILED,
  error
});

/* Publisher Create Actions */

export const publisherCreateRequest = ({token, name}) => ({
  type: actionTypes.PUBLISHER_CREATE_REQUEST,
  payload: {
    name
  },
  headers: {
    "Content-Type": "application/json; charset=utf-8",
    Authorization: token
  }
});

export const publisherCreateReceive = json => ({
  type: actionTypes.PUBLISHER_CREATE_RECEIVE,
  payload: {
    data: json.data
  }
});

export const publisherCreateFailed = error => ({
  type: actionTypes.PUBLISHER_CREATE_FAILED,
  error
});

/* Publisher Remove request */

export const publisherRemoveRequest = ({token, id}) => ({
  type: actionTypes.PUBLISHER_REMOVE_REQUEST,
  payload: {
    id
  },
  headers: {
    "Content-Type": "application/json; charset=utf-8",
    Authorization: token
  }
});

export const publisherRemoveReceive = data => ({
  type: actionTypes.PUBLISHER_REMOVE_RECEIVE,
  payload: {}
});

export const publisherRemoveFailed = error => ({
  type: actionTypes.PUBLISHER_REMOVE_FAILED,
  error
});
