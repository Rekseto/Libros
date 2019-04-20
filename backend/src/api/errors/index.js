import AlreadyExistsError from "./AlreadyExistsError";
import NotAllowedError from "./NotAllowedError";
import NotEnoughError from "./NotEnoughError";
import NotFound from "./NotFoundError";
import InternalServerError from "./InternalServerError";
import BookAlreadyExistsError from "./BookAlreadyExistsError";
import AuthWrongCredentialsError from "./AuthWrongCredentialsError";
import AuthWrongPasswordError from "./AuthWrongPasswordError";
import AuthWrongUsernameError from "./AuthWrongUsernameError";

export default [
  AlreadyExistsError,
  NotAllowedError,
  NotEnoughError,
  NotFound,
  InternalServerError,
  BookAlreadyExistsError,
  AuthWrongCredentialsError,
  AuthWrongPasswordError,
  AuthWrongUsernameError
];
