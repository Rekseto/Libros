import compose from "koa-compose";
import controller, {get, post, del, put} from "inra-server-http/dest/router";
import userServices from "../services/userServices";

@controller("/user")
export default class UserRouter {
  constructor(dependencies) {
    this.database = dependencies.database;
    this.logger = dependencies.logger;

    this.userService = userServices(this.database, this.logger);
  }
  /**
   * @apiDescription
   * Fetches all loans of user
   *
   * @api {post}  /user/                    User
   * @apiName     UserLoans
   * @apiGroup    User
   * @apiVersion  1.0.0
   *
   *
   * @apiSuccess  {Object}  obj             Response object
   * @apiSuccess  {boolean} obj.success     Whether success
   * @apiSuccess  {Object}  obj.data	      Requested loans
   *
   * @apiSuccessExample {json} Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *         "success": true,
   *         "data": {}
   *
   */
  @get("/:username")
  async getLoaned(ctx) {
    const {username} = ctx.params;
    const data = await this.userService.getLoaned(username);

    ctx.body = {
      success: true,
      data: data
    };
  }
}
