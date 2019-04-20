class NotFound extends Error {
  errorCode = 100;
  httpStatus = 404;
  message = "Resource not found";
}

export default NotFound;
