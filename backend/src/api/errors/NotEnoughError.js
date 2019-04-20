class NotEnoughError extends Error {
  errorCode = 112;
  httpStatus = 403;
  message = "Not enough resources";
}

export default NotEnoughError;
