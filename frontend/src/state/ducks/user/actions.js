export const loansRequest = username => ({
  type: "USER_LOANS_REQUEST",
  payload: {
    username
  }
});

export const loansReceive = json => ({
  type: "USER_LOANS_RECEIVE",
  payload: [
    ...json
  ]
});

export const loansFailed = error => ({
  type: "USER_LOANS_FAILED",
  error
});





export default {
  loansRequest,
  loansReceive,
  loansFailed
};
