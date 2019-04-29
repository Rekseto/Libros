class BadRequestError extends Error {
  errorCode = 110;
  httpStatus = 401;
  message = "Bad Request";
}

export default BadRequestError;
