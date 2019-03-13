class AuthWrongUsernameError extends Error {
  errorCode = 104;
  httpStatus = 401;
  userMessage = "Wrong username";
}

export default AuthWrongUsernameError;
