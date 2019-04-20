class AuthWrongPasswordError extends Error {
  errorCode = 103;
  httpStatus = 401;
  message = "Wrong password";
}

export default AuthWrongPasswordError;
