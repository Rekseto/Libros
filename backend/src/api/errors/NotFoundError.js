class NotFound extends Error {
  errorCode = 100;
  httpStatus = 404;
  userMessage = "Resource not found";
}

export default NotFound;
