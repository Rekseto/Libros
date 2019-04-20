class BookAlreadyExistsError extends Error {
  errorCode = 104;
  httpStatus = 400;
  message = "Book with same ISBN exists";
}

export default BookAlreadyExistsError;
