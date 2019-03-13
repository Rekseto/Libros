class AuthWrongPasswordError extends Error {
  errorCode = 103;
  httpStatus = 401;
  userMessage = "Wrong password";
}

export default AuthWrongPasswordError;
