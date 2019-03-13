export const addLoanRequest = ({days, isbn, username, token}) => ({
  type: "LOAN_ADD_REQUEST",
  payload: {
    days,
    isbn,
    username
  },
  headers: {
    "Content-Type": "application/json; charset=utf-8",
    Authorization: token
  }
});

export const addLoanReceive = json => ({
  type: "LOAN_ADD_RECEIVE",
  payload: {
    ...json
  }
});

export const addLoanFailed = error => ({
  type: "LOAN_ADD_FAILED",
  error
});

export const removeLoanRequest = ({id, token, username}) => ({
  type: "LOAN_REMOVE_REQUEST",
  payload: {
    id,
    username
  },
  headers: {
    "Content-Type": "application/json; charset=utf-8",
    Authorization: token
  }
});

export const removeLoanReceive = json => ({
  type: "LOAN_REMOVE_RECEIVE",
  payload: {
    ...json
  }
});

export const removeLoanFailed = error => ({
  type: "LOAN_REMOVE_FAILED",
  error
});

export default {
  addLoanFailed,
  addLoanRequest,
  addLoanReceive,

  removeLoanRequest,
  removeLoanFailed,
  removeLoanReceive
};
