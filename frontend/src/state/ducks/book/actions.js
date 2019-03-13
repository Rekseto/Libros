export const bookCreateRequest = (
  {isbn, author, title, category, publisher, date, stock},
  token
) => ({
  type: "BOOK_CREATE_REQUEST",
  payload: {
    isbn,
    author,
    publisher,
    title,
    category,
    date,
    stock
  },
  headers: {
    "Content-Type": "application/json; charset=utf-8",
    Authorization: token
  }
});

export const bookCreateReceive = json => ({
  type: "BOOK_CREATE_RECEIVE"
});

export const bookCreateFailed = error => ({
  type: "BOOK_CREATE_FAILED",
  error
});

export const bookFindRequest = isbn => ({
  type: "BOOK_FIND_REQUEST",
  payload: {
    isbn
  },
  headers: {
    "Content-Type": "application/json; charset=utf-8"
  }
});

export const bookFindReceive = json => ({
  type: "BOOK_FIND_RECEIVE",
  payload: {
    ...json
  }
});

export const bookFindFailed = error => ({
  type: "BOOK_FIND_FAILED",
  error
});

export const bookRemoveRequest = ({isbn, token}) => ({
  type: "BOOK_REMOVE_REQUEST",
  payload: {
    isbn
  },
  headers: {
    "Content-Type": "application/json; charset=utf-8",
    Authorization: token
  }
});

export const bookRemoveReceive = json => ({
  type: "BOOK_REMOVE_RECEIVE"
});

export const bookRemoveFailed = error => ({
  type: "BOOK_REMOVE_FAILED",
  error
});

export const bookEditRequest = (body, token) => ({
  type: "BOOK_EDIT_REQUEST",
  payload: {
    ...body
  },
  headers: {
    "Content-Type": "application/json; charset=utf-8",
    Authorization: token
  }
});

export const bookEditReceive = json => ({
  type: "BOOK_EDIT_RECEIVE"
});

export const bookEditFailed = error => ({
  type: "BOOK_EDIT_FAILED",
  error
});

export default {
  bookCreateRequest,
  bookCreateReceive,
  bookCreateFailed,

  bookRemoveRequest,
  bookRemoveReceive,
  bookRemoveFailed,

  bookFindRequest,
  bookFindReceive,
  bookFindFailed
};
