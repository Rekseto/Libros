class InternalServerError extends Error {
  errorCode = 101;
  httpStatus = 500;
  userMessage = "Internal Server Error";
}

export default InternalServerError;
