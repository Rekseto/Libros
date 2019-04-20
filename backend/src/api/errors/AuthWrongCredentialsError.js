class AuthWrongCredentialsError extends Error {
  errorCode = 103;
  httpStatus = 401;
  message = "Wrong credentials";
}

export default AuthWrongCredentialsError;
