class AuthWrongCredentialsError extends Error {
  errorCode = 103;
  httpStatus = 401;
  userMessage = "Wrong credentials";
}

export default AuthWrongCredentialsError;
