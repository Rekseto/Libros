class InternalServerError extends Error {
  errorCode = 101;
  httpStatus = 500;
  message = "Internal Server Error";
}

export default InternalServerError;
