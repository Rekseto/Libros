class NotAllowedError extends Error {
  errorCode = 101;
  httpStatus = 403;
  message = "Not allowed";
}

export default NotAllowedError;
