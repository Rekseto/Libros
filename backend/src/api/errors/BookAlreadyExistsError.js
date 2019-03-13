class BookAlreadyExistsError extends Error {
  errorCode = 140;
  httpStatus = 400;
  userMessage = "Book with same ISBN exists";
}

export default BookAlreadyExistsError;
