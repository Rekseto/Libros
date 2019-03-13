export const usersFetchRequest = (username, token, page) => ({
  type: "USERS_FETCH_REQUEST",
  payload: {
    page,
    username
  },
  headers: {
    "Content-Type": "application/json; charset=utf-8",
    Authorization: token
  }
});

export const usersFetchReceive = json => ({
  type: "USERS_FETCH_RECEIVE",
  payload: [...json]
});

export const usersFetchFailed = error => ({
  type: "v",
  error
});

export default {
  usersFetchRequest,
  usersFetchReceive,
  usersFetchFailed
};
