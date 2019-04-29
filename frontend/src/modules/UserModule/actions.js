import * as actionTypes from "./actionTypes";

export const userLoansRequest = ({username, token}) => ({
  type: actionTypes.USER_LOANS_REQUEST,
  payload: {
    username
  },
  headers: {
    "Content-Type": "application/json; charset=utf-8",
    Authorization: token
  }
});

export const userLoansReceive = json => ({
  type: actionTypes.USER_LOANS_RECEIVE,
  payload: {
    data: json.data
  }
});

export const userLoansFailed = error => ({
  type: actionTypes.USER_LOANS_FAILED,
  error
});
// Fetch Users
export const fetchUsersRequest = ({page, token, username}) => ({
  type: actionTypes.USERS_FETCH_REQUEST,
  payload: {
    page,
    username
  },
  headers: {
    "Content-Type": "application/json; charset=utf-8",
    Authorization: token
  }
});

export const fetchUsersReceive = json => ({
  type: actionTypes.USERS_FETCH_RECEIVE,
  payload: {
    data: json.data,
    pages: json.pages
  }
});

export const fetchUsersFailed = error => ({
  type: actionTypes.USERS_FETCH_FAILED,
  error
});
