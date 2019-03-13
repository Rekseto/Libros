import compose from "koa-compose";
import controller, {get, post, del, patch} from "inra-server-http/dest/router";
import publisherServices from "../services/publisherServices";

@controller("/publishers")
export default class PublisherRouter {
  constructor(dependencies) {
    this.database = dependencies.database;
    this.logger = dependencies.logger;

    this.publisherService = publisherServices(this.database, this.logger);
  }

  /**
   * @apiDescription
   * Fetches all publishers from database
   *
   * @api {post}  /publishers/              Books
   * @apiName     PublisherFetch
   * @apiGroup    publishers
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
  @get("/")
  async fetchAll(ctx) {
    const data = await this.publisherService.fetchAll();
    ctx.body = {
      success: true,
      data
    };
  }

  /**
   * @apiDescription
   * Adds new Publisher to database
   *
   * @api {post}  /publishers/              Publisher
   * @apiName     PublisherCreate
   * @apiGroup    publishers
   * @apiVersion  1.0.0
   *
   *
   * @apiSuccess  {Object}  obj             Response object
   * @apiSuccess  {boolean} obj.success     Whether success
   * @apiSuccess  {Object}  obj.data	      Created Publisher
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

    const data = await this.publisherService.create(name);

    ctx.body = {
      success: true,
      data: data
    };
  }

  /**
   * @apiDescription
   * Delete Publisher from database
   *
   * @api {post}  /publishers/              Publisher
   * @apiName     PublisherDelete
   * @apiGroup    Publishers
   * @apiVersion  1.0.0
   *
   *
   * @apiSuccess  {Object}  obj             Response object
   * @apiSuccess  {boolean} obj.success     Whether success
   * @apiSuccess  {Object}  obj.data	      Deleted publisher
   *
   * @apiSuccessExample {json} Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *         "success": true,
   *         "data": {}
   *
   */
  @del("/:id", function() {
    return compose([this.isAuthorized(), this.isAdmin()]);
  })
  async delete(ctx) {
    const {id} = ctx.params;
    const data = await this.publisherService.delete(id);

    ctx.body = {
      success: true,
      data: data
    };
  }
}
