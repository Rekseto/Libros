import * as actionTypes from "./actionTypes";

// Actions to fetch books
export const booksFetchRequest = ({
  page,
  isbn,
  author,
  title,
  publisher,
  category
}) => ({
  type: actionTypes.BOOKS_SEARCH_REQUEST,
  payload: {
    page,
    isbn,
    author,
    title,
    publisher,
    category
  },
  headers: {
    "Content-Type": "application/json; charset=utf-8"
  }
});

export const booksFetchReceive = json => ({
  type: actionTypes.BOOKS_SEARCH_RECEIVE,
  payload: {
    data: json.data,
    pages: json.pages
  }
});

export const booksFetchFailed = error => ({
  type: actionTypes.BOOKS_SEARCH_FAILED,
  error
});

// Actions to fetch book
export const bookFetchRequest = ({isbn}) => ({
  type: actionTypes.BOOK_FETCH_REQUEST,
  payload: {
    isbn
  },
  headers: {
    "Content-Type": "application/json; charset=utf-8"
  }
});

export const bookFetchReceive = json => ({
  type: actionTypes.BOOK_FETCH_RECEIVE,
  payload: {
    data: json.data
  }
});

export const bookFetchFailed = error => ({
  type: actionTypes.BOOK_FETCH_FAILED,
  error
});

// Actions to create a book

export const bookCreateRequest = (
  {isbn, author, title, category, publisher, date, stock},
  token
) => ({
  type: actionTypes.BOOK_CREATE_REQUEST,
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
  type: actionTypes.BOOK_CREATE_RECEIVE
});

export const bookCreateFailed = error => ({
  type: actionTypes.BOOK_CREATE_FAILED,
  error
});

// Book remove

export const bookRemoveRequest = ({isbn, token}) => ({
  type: actionTypes.BOOK_REMOVE_REQUEST,
  payload: {
    isbn
  },
  headers: {
    "Content-Type": "application/json; charset=utf-8",
    Authorization: token
  }
});

export const bookRemoveReceive = json => ({
  type: actionTypes.BOOK_REMOVE_RECEIVE
});

export const bookRemoveFailed = error => ({
  type: actionTypes.BOOK_REMOVE_FAILED,
  error
});

// Book Edit

export const bookEditRequest = ({body, token}) => ({
  type: actionTypes.BOOK_EDIT_REQUEST,
  payload: {
    ...body
  },
  headers: {
    "Content-Type": "application/json; charset=utf-8",
    Authorization: token
  }
});

export const bookEditReceive = json => ({
  type: actionTypes.BOOK_EDIT_RECEIVE
});

export const bookEditFailed = error => ({
  type: actionTypes.BOOK_EDIT_FAILED,
  error
});

export default {
  booksFetchRequest,
  booksFetchReceive,
  booksFetchFailed,

  bookFetchRequest,
  bookFetchReceive,
  bookFetchFailed,

  bookCreateRequest,
  bookCreateReceive,
  bookCreateFailed
};
