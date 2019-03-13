export const booksRequest = ({
  page,
  isbn,
  author,
  title,
  publisher,
  category
}) => ({
  type: "BOOKS_FETCH_REQUEST",
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

export const booksReceive = json => ({
  type: "BOOKS_FETCH_RECEIVE",
  payload: {
    data: json.data,
    pages: json.pages
  }
});

export const booksFailed = error => ({
  type: "BOOKS_FETCH_FAILED",
  error
});

export default {
  booksRequest,
  booksReceive,
  booksFailed
};
