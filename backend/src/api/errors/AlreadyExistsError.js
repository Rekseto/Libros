class AlreadyExistsError extends Error {
  errorCode = 110;
  httpStatus = 409;
  userMessage = "Resource already exists";
}

export default AlreadyExistsError;
