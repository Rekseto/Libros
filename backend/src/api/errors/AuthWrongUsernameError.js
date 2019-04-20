class AuthWrongUsernameError extends Error {
  errorCode = 104;
  httpStatus = 401;
  message = "Wrong username";
}

export default AuthWrongUsernameError;
