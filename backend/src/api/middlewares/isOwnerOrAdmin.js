import middleware from "inra-server-http/dest/middleware";

import NotAllowedError from "../errors/NotAllowedError";
/**
 * A simple middleware which checks if an user has enough privilegies to execute
 * an action.
 *
 * @module  middleware/isOwnerOrAdmin
 * @class   isOwnerOrAdminMiddleware
 * @throws  NotAllowedError
 */

@middleware()
class isOwnerOrAdmin {
  constructor({database}) {
    this.models = database.models;
  }

  async before(ctx, next) {}

  /**
   * Checks if user has necessary permissions or is owner.
   *
   * @param  {Context}  ctx
   * @param  {Function} next
   * @param  {Array}    requiredPermissions
   * @return {Promise}
   */
  async handle(ctx, next, requiredPermissions) {
    if (
      ctx.state.user.permission == "admin" ||
      ctx.state.user.username === ctx.params.username
    ) {
      return next();
    }

    throw new NotAllowedError(
      `User doesn't have required permissions ${requiredPermissions}`
    );
  }
}

export default isOwnerOrAdmin;
