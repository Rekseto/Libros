import middleware from "inra-server-http/dest/middleware";

import NotAllowedError from "../errors/NotAllowedError";
/**
 * A simple middleware which checks if an user has enough privilegies to execute
 * an action.
 *
 * @module  middleware/isAdmin
 * @class   isAdminMiddleware
 * @throws  NotAllowedError
 */

@middleware()
class isAdmin {
  constructor({database}) {
    this.models = database.models;
  }

  async before(ctx, next) {}

  /**
   * Checks if user has necessary permissions.
   *
   * @param  {Context}  ctx
   * @param  {Function} next
   * @param  {Array}    requiredPermissions
   * @return {Promise}
   */
  async handle(ctx, next, requiredPermissions) {
    if (ctx.state.user.permission == "admin") {
      return next();
    }

    throw new NotAllowedError(
      `User doesn't have required permissions ${requiredPermissions}`
    );
  }
}

export default isAdmin;
