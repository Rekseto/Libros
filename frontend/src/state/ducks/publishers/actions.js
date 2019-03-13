export const publishersFetchRequest = () => ({
  type: "PUBLISHERS_FETCH_REQUEST"
});

export const publishersFetchReceive = data => ({
  type: "PUBLISHERS_FETCH_RECEIVE",
  payload: data
});

export const publishersFetchFailed = error => ({
  type: "PUBLISHERS_FETCH_FAILED",
  error
});

export const publishersAddRequest = (token, name) => ({
  type: "PUBLISHERS_ADD_REQUEST",
  payload: {
    name
  },
  headers: {
    "Content-Type": "application/json; charset=utf-8",
    Authorization: token
  }
});

export const publishersAddReceive = data => ({
  type: "PUBLISHERS_ADD_RECEIVE",
  payload: data
});

export const publishersAddFailed = error => ({
  type: "PUBLISHERS_ADD_FAILED",
  error
});

export const publishersRemoveRequest = (token, id) => ({
  type: "PUBLISHERS_REMOVE_REQUEST",
  payload: {
    id
  },
  headers: {
    "Content-Type": "application/json; charset=utf-8",
    Authorization: token
  }
});

export const publishersRemoveReceive = data => ({
  type: "PUBLISHERS_REMOVE_RECEIVE",
  payload: data
});

export const publishersRemoveFailed = error => ({
  type: "PUBLISHERS_REMOVE_FAILED",
  error
});

export default {
  publishersFetchFailed,
  publishersFetchReceive,
  publishersFetchRequest,

  publishersAddRequest,
  publishersAddReceive,
  publishersAddFailed,

  publishersRemoveRequest,
  publishersRemoveReceive,
  publishersRemoveFailed
};
