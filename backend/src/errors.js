import errors, {defineError} from "inra-server-error";

import NotFound from "./api/errors/NotFoundError";
import InternalServerError from "./api/errors/InternalServerError";
import AuthWrongCredentialsError from "./api/errors/AuthWrongCredentialsError";
import NotAllowedError from "./api/errors/NotAllowedError";
import AuthWrongUsernameError from "./api/errors/AuthWrongUsernameError";
import AuthWrongPasswordError from "./api/errors/AuthWrongPasswordError";
import BookAlreadyExistsError from "./api/errors/BookAlreadyExistsError";
import AlreadyExistsError from "./api/errors/AlreadyExistsError";

defineError({instance: AuthWrongCredentialsError});
defineError({instance: AuthWrongPasswordError});
defineError({instance: AuthWrongUsernameError}, "AuthWrongUsernameError");
defineError({instance: NotAllowedError}, "NotAllowedError");
defineError({instance: BookAlreadyExistsError}, "BookAlreadyExistsError");
defineError({instance: AlreadyExistsError}, "AlreadyExistsError");
defineError({instance: NotFound}, "NotFoundError");
defineError({instance: InternalServerError}, "InternalServerError");
defineError({instance: Error});
export default errors;
