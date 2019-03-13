export const fetchLoansRequest = (token, page) => ({
  type: "LOANS_FETCH_REQUEST",
  payload: {
    page
  },
  headers: {
    "Content-Type": "application/json; charset=utf-8",
    Authorization: token
  }
});

export const fetchLoansReceive = json => ({
  type: "LOANS_FETCH_RECEIVE",
  payload: {
    data: json.data,
    pages: json.pages
  }
});
export const fetchLoansFailed = error => ({
  type: "LOANS_FETCH_FAILED",
  error
});

export default {
  fetchLoansFailed,
  fetchLoansRequest,
  fetchLoansReceive
};
