import compose from "koa-compose";
import controller, {get, post, del, put} from "inra-server-http/dest/router";
import authServices from "../services/authServices";

@controller("/auth")
export default class AuthRouter {
  constructor(dependencies) {
    this.database = dependencies.database;
    this.logger = dependencies.logger;

    this.authServices = authServices(this.database, this.logger);
  }
  /**
   * @apiDescription
   * Creates a new user account using Passport's Local Strategy with provided
   * creditentials (username & password).
   *
   * @api {post}  /auth/register            Register user
   * @apiName     AuthRegister
   * @apiGroup    Auth
   * @apiVersion  1.0.0
   *
   * @apiUse      ErrorResponse
   *
   * @apiParam    {string}  username        Unique user's username
   * @apiParam    {string}  password        User's password
   * @apiParam	  {string}  email	    User's email
   *
   * @apiSuccess  {Object}  obj             Response object
   * @apiSuccess  {boolean} obj.success     Whether new user was successfully created
   * @apiSuccess  {Object}  obj.data        Provided data
   *
   * @apiSuccessExample {json} Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *         "success": true
   *     }
   */
  @post("/register", function() {
    return compose([this.isAuthorized(), this.isAdmin()]);
  })
  async create(ctx) {
    const {username, password, email, permission} = ctx.request.body;

    const data = await this.authServices.create({
      username,
      password,
      email,
      permission
    });

    ctx.body = {
      success: true
    };
  }
  /**
   * @apiDescription
   * Destroys user's token
   *
   * @api {post}  /auth/logout               Auth (Local Strategy)
   * @apiName     AuthLogout
   * @apiGroup    Auth
   * @apiVersion  1.0.0
   *
   * @apiUse      ErrorResponse
   *
   * @apiParam    {string}  username        User's username
   * @apiSuccess  {Object}  obj             Response object
   * @apiSuccess  {boolean} obj.success     Whether user was successfully logged-in
   * @apiSuccess  {string}  obj.token       JSON Web Token used for authorization
   *
   * @apiSuccessExample {json} Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *         "success": true,
   *         "token": "J…z.a…R-k…y-s",
   *     }
   */
  @post("/login")
  async login(ctx) {
    const {username, password} = ctx.request.body;
    const data = await this.authServices.login({
      username,
      password
    });

    ctx.body = {
      success: true,
      data
    };
  }
  /**
   * @apiDescription
   * Used to invalid all users sessions
   *
   * @api {post}  /auth/logout               Auth (Local Strategy)
   * @apiName     AuthLogout
   * @apiGroup    Auth
   * @apiVersion  1.0.0
   *
   * @apiUse      ErrorResponse
   *
   * @apiSuccess  {Object}  obj             Response object
   * @apiSuccess  {boolean} obj.success     Whether logout
   *
   * @apiSuccessExample {json} Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *         "success": true,
   *
   *
   */
  @get("/logout", function() {
    return compose([this.isAuthorized()]);
  })
  async logout(ctx) {
    await this.authServices.logout({username: ctx.state.user.username});

    ctx.body = {
      success: true
    };
  }

  /**
   * @apiDescription
   * Verifies user's token
   *
   * @api {post}  /auth/verify               Auth (Local Strategy)
   * @apiName     AuthLogin
   * @apiGroup    Auth
   * @apiVersion  1.0.0
   *
   * @apiUse      ErrorResponse
   *
   * @apiHeader   {string}  Authorization   token
   *
   * @apiSuccess  {Object}  obj             Response object
   * @apiSuccess  {boolean} obj.success     Whether user was successfully verified
   *
   * @apiSuccessExample {json} Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *         "success": true,
   *     }
   */
  @get("/verify", function() {
    return compose([this.isAuthorized()]);
  })
  async verify(ctx) {
    ctx.body = {
      success: true,
      data: ctx.state.user
    };
  }
}
