class NotEnoughError extends Error {
  errorCode = 112;
  httpStatus = 403;
  userMessage = "Not enough resources";
}

export default NotEnoughError;
