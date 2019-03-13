import compose from "koa-compose";
import controller, {get, post, del, put} from "inra-server-http/dest/router";
import usersServices from "../services/usersServices";
import {paginateFunction} from "../../utils/paginateUtils";
import queryString from "query-string";

@controller("/users")
export default class UsersRouter {
  constructor(dependencies) {
    this.database = dependencies.database;
    this.logger = dependencies.logger;

    this.usersService = usersServices(this.database, this.logger);
  }

  /**
   * @apiDescription
   * Fetches page with users from database
   *
   * @api {post}  /users/                   Users
   * @apiName     UsersFetch
   * @apiGroup    users
   * @apiVersion  1.0.0
   *
   *
   * @apiSuccess  {Object}  obj             Response object
   * @apiSuccess  {boolean} obj.success     Whether success
   * @apiSuccess  {Object}  obj.data	      Requested publishers
   *
   * @apiSuccessExample {json} Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *         "success": true,
   *         "data": {}
   *
   */
  @get("/:page", function() {
    return compose([this.isAuthorized(), this.isAdmin()]);
  })
  async getUsers(ctx) {
    const {page} = ctx.params;
    const {username} = queryString.parse(ctx.request.search);

    const data = await this.usersService.search(username);

    const pages = data.length / 20 > 1 ? data.length / 20 : 1;

    ctx.body = {
      success: true,
      data: paginateFunction(data, page, 20),
      pages
    };
  }
}
