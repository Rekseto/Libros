import compose from "koa-compose";
import controller, {get, post, del, patch} from "inra-server-http/dest/router";
import categoryServices from "../services/categoryServices";

@controller("/categories")
export default class CategoryRouter {
  constructor(dependencies) {
    this.database = dependencies.database;
    this.logger = dependencies.logger;

    this.categoryService = categoryServices(this.database, this.logger);
  }

  /**
   * @apiDescription
   * Fetches all categories from database
   *
   * @api {post}  /categories/              Books
   * @apiName     CategoryFetch
   * @apiGroup    Categories
   * @apiVersion  1.0.0
   *
   *
   * @apiSuccess  {Object}  obj             Response object
   * @apiSuccess  {boolean} obj.success     Whether success
   * @apiSuccess  {Object}  obj.data	      Requested categories
   *
   * @apiSuccessExample {json} Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *         "success": true,
   *         "data": {}
   *
   */
  @get("/")
  async fetchAll(ctx) {
    const data = await this.categoryService.fetchAll();
    ctx.body = {
      success: true,
      data
    };
  }

  /**
   * @apiDescription
   * Adds new category to database
   *
   * @api {post}  /categories/              Category
   * @apiName     CategoryCreate
   * @apiGroup    Categories
   * @apiVersion  1.0.0
   *
   *
   * @apiSuccess  {Object}  obj             Response object
   * @apiSuccess  {boolean} obj.success     Whether success
   * @apiSuccess  {Object}  obj.data	      Created category
   *
   * @apiSuccessExample {json} Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *         "success": true,
   *         "data": {}
   *
   */
  @post("/", function() {
    return compose([this.isAuthorized(), this.isAdmin()]);
  })
  async create(ctx) {
    const {name} = ctx.request.body;

    const data = await this.categoryService.create(name);

    ctx.body = {
      success: true,
      data: data
    };
  }

  /**
   * @apiDescription
   * Delete category from database
   *
   * @api {post}  /categories/              Category
   * @apiName     CategoryDelete
   * @apiGroup    Categories
   * @apiVersion  1.0.0
   *
   *
   * @apiSuccess  {Object}  obj             Response object
   * @apiSuccess  {boolean} obj.success     Whether success
   * @apiSuccess  {Object}  obj.data	      Deleted category
   *
   * @apiSuccessExample {json} Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *         "success": true,
   *         "data": {}
   *
   */
  @del("/:name", function() {
    return compose([this.isAuthorized(), this.isAdmin()]);
  })
  async delete(ctx) {
    const {name} = ctx.params;
    const data = await this.categoryService.delete(name);

    ctx.body = {
      success: true,
      data: data
    };
  }
}
