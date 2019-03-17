import middleware from "inra-server-http/dest/middleware";
import {extractToken, decodeToken} from "../../utils/authUtils";
import NotAllowedError from "../errors/NotAllowedError";
import jwt from "jsonwebtoken";
/**
 * A simple middleware which checks if the request is authorized (user is logged
 * in). Additionally, populates context with basic user informations for further
 * usage. Based on JSON Web Tokens.
 *
 * @module  middleware/isAuthorizedMiddleware
 * @class   isAuthorizedMiddleware
 * @throws  NotAllowedError
 *
 * @apiDefine       isAuthorizedMiddleware
 * @apiPermission   isAuthorized
 * @apiHeader       {string}  Authorization   User JSON Web Token
 *
 * @apiHeaderExample {json} Authorization header:
 *     Authorization: Bearer <Access Token>
 */
import AuthWrongCredentialsError from "../errors/AuthWrongCredentialsError";

@middleware()
class isAuthorizedMiddleware {
  constructor({database}) {
    this.models = database.models;
  }

  /**
   * Tries to extract JWT token from header/query.
   *
   * @param  {Context}  ctx
   * @param  {Function} next
   * @return {Promise}
   */
  async before(ctx, next) {
    try {
      this.token = extractToken(ctx);
      if (!this.token) {
        throw new NotAllowedError("Cannot extract token from context");
      }
    } catch (error) {
      throw new NotAllowedError("Cannot extract token from context");
    }
  }
  /**
   * Checks if provided JWT is valid and populates context with user data.
   *
   * @param  {Context}  ctx
   * @param  {Function} next
   * @return {Promise}
   */
  async handle(ctx, next) {
    const data = await this.fetchUser();

    const secret = `${data.secret}@${String(process.env.AUTH_SECRET)}`;
    return jwt.verify(this.token, secret, (error, decoded) => {
      if (error) {
        throw new NotAllowedError(error.message);
      }

      // Populate context with user data:
      ctx.state.user = {
        username: data.username,
        email: data.email,
        permission: data.permission,
        _id: data._id
      };
      ctx.state.jwt = decoded;

      return next();
    });
  }

  /**
   * Extracts basic user data from database for further usage.
   *
   * @return {Promise|Object}
   */
  async fetchUser() {
    try {
      const {User} = this.models;
      const {payload} = decodeToken(this.token);
      const user = await User.findOne({
        _id: payload.id
      });

      if (!user) throw new AuthWrongCredentialsError();
      return user;
    } catch (error) {
      throw new AuthWrongCredentialsError();
    }
  }
}

export default isAuthorizedMiddleware;
