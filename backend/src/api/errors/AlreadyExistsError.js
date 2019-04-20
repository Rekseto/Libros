class AlreadyExistsError extends Error {
  errorCode = 102;
  httpStatus = 409;
  message = "Resource already exists";
}

export default AlreadyExistsError;
