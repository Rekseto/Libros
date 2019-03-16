class AlreadyExistsError extends Error {
  errorCode = 102;
  httpStatus = 409;
  userMessage = "Resource already exists";
}

export default AlreadyExistsError;
