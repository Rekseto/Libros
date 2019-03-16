class BookAlreadyExistsError extends Error {
  errorCode = 104;
  httpStatus = 400;
  userMessage = "Book with same ISBN exists";
}

export default BookAlreadyExistsError;
