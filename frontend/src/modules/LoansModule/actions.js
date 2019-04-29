import * as actionTypes from "./actionTypes";

// loan add
export const loanAddRequest = ({isbn, token, username}) => ({
  type: actionTypes.LOAN_ADD_REQUEST,
  payload: {
    isbn,
    username,
    days: 30
  },
  headers: {
    "Content-Type": "application/json; charset=utf-8",
    Authorization: token
  }
});

export const loanAddReceive = json => ({
  type: actionTypes.LOAN_ADD_RECEIVE,
  payload: {
    data: json.data
  }
});

export const loanAddFailed = error => ({
  type: actionTypes.LOAN_ADD_FAILED,
  error
});
// loan remove
export const loanRemoveRequest = ({id, token, username}) => ({
  type: actionTypes.LOAN_REMOVE_REQUEST,
  payload: {
    id,
    username
  },
  headers: {
    "Content-Type": "application/json; charset=utf-8",
    Authorization: token
  }
});

export const loanRemoveReceive = json => ({
  type: actionTypes.LOAN_REMOVE_RECEIVE,
  payload: {
    data: json.data
  }
});

export const loanRemoveFailed = error => ({
  type: actionTypes.LOAN_REMOVE_FAILED,
  error
});

// Fetch loans
export const fetchLoansRequest = ({token, page}) => ({
  type: actionTypes.LOANS_FETCH_REQUEST,
  payload: {
    page
  },
  headers: {
    "Content-Type": "application/json; charset=utf-8",
    Authorization: token
  }
});

export const fetchLoansReceive = json => ({
  type: actionTypes.LOANS_FETCH_RECEIVE,
  payload: {
    data: json.data,
    pages: json.pages
  }
});
export const fetchLoansFailed = error => ({
  type: actionTypes.LOANS_FETCH_FAILED,
  error
});
