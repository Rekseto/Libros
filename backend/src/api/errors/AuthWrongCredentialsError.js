class AuthWrongCredentialsError extends Error {
  errorCode = 105;
  httpStatus = 401;
  userMessage = "Wrong credentials";
}

export default AuthWrongCredentialsError;
