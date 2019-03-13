import compose from "koa-compose";
import controller, {
  get,
  post,
  del,
  patch,
  put
} from "inra-server-http/dest/router";
import bookServices from "../services/bookServices";
import queryString from "query-string";
import {paginateFunction} from "../../utils/paginateUtils";

@controller("/books")
export default class BookRouter {
  constructor(dependencies) {
    this.database = dependencies.database;
    this.logger = dependencies.logger;

    this.bookService = bookServices(this.database, this.logger);
  }
  /**
   * @apiDescription
   * Fetches books by specified fields from database
   *
   * @api {get}  /books/               Books
   * @apiName     BooksFetch
   * @apiGroup    Books
   * @apiVersion  1.0.0
   *
   * @apiUse      ErrorResponse
   *
   * @apiSuccess  {Object}  obj             Response object
   * @apiSuccess  {boolean} obj.success     Whether user was successfully logged-in
   * @apiSuccess  {string}  obj.data	    All fetched books
   * @apiSuccessExample {json} Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *         "success": true,
   *         "data": []
   *
   */
  @get("/")
  async fetchAll(ctx) {
    try {
      const {
        author,
        title,
        isbn,
        publisher,
        category,
        page
      } = queryString.parse(ctx.request.search);

      const data = await this.bookService.search({
        author,
        title,
        isbn,
        publisher,
        category
      });
      const pages = data.length / 50 > 1 ? data.length / 50 : 1;

      ctx.body = {
        success: true,
        data: paginateFunction(data, page, 50),
        pages
      };
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }

  /**
   * @apiDescription
   * Fetch book with specified isbn
   *
   * @api {get}   /books/:isbn              Books
   * @apiName     BookFetch
   * @apiGroup    Books
   * @apiVersion  1.0.0
   *
   *
   * @apiSuccess  {Object}  obj             Response object
   * @apiSuccess  {boolean} obj.success     Whether user was successfully logged-in
   * @apiSuccess  {string}  obj.data	      Requested book
   *
   * @apiSuccessExample {json} Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *         "success": true,
   *         "data": {}
   *
   */
  @get("/:isbn")
  async getBook(ctx) {
    try {
      const {isbn} = ctx.params;
      const data = await this.bookService.getBook(isbn);

      ctx.body = {
        success: true,
        data: data
      };
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }

  /**
   * @apiDescription
   * Fetch book with specified isbn
   *
   * @api {get}  /books/:isbn              Books
   * @apiName     BookFetch
   * @apiGroup    Books
   * @apiVersion  1.0.0
   *
   *
   * @apiSuccess  {Object}  obj             Response object
   * @apiSuccess  {boolean} obj.success     Whether user was successfully logged-in
   * @apiSuccess  {string}  obj.data	      Requested book
   *
   * @apiSuccessExample {json} Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *         "success": true,
   *         "data": {}
   *
   */
  @get("/stock/:isbn")
  async getStock(ctx) {
    try {
      const {isbn} = ctx.params;

      const data = await this.bookService.getStock(isbn);

      ctx.body = {
        success: true,
        data: data
      };
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }

  /**
   * @apiDescription
   * Fetch all loaners
   *
   * @api {get}  /books/:isbn              Books
   * @apiName     BookFetch
   * @apiGroup    Books
   * @apiVersion  1.0.0
   *
   *
   * @apiSuccess  {Object}  obj             Response object
   * @apiSuccess  {boolean} obj.success     Whether user was successfully logged-in
   * @apiSuccess  {string}  obj.data	      Requested book
   *
   * @apiSuccessExample {json} Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *         "success": true,
   *         "data": {}
   *
   */
  @get("/loaners/:isbn")
  async loaners(ctx) {
    const {isbn} = ctx.params;
    const data = await this.bookService.getLoaners(isbn);

    ctx.body = {
      success: true,
      data: data
    };
  }

  /**
   * @apiDescription
   * Adds new book to database
   *
   * @api {post}  /books/              Books
   * @apiName     BookCreate
   * @apiGroup    Books
   * @apiVersion  1.0.0
   *
   *
   * @apiSuccess  {Object}  obj             Response object
   * @apiSuccess  {boolean} obj.success     Whether user was successfully logged-in
   * @apiSuccess  {string}  obj.data	      Requested book
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
    const {
      title,
      isbn,
      author,
      date,
      stock,
      publisher,
      category
    } = ctx.request.body;

    const data = await this.bookService.create({
      title,
      isbn,
      author,
      date,
      stock,
      publisher,
      category
    });

    ctx.body = {
      success: true,
      data: data
    };
  }

  /**
   * @apiDescription
   * Adds new book to database
   *
   * @api {post}  /books/:isbn             Books
   * @apiName     BookDelete
   * @apiGroup    Books
   * @apiVersion  1.0.0
   *
   *
   * @apiSuccess  {Object}  obj             Response object
   * @apiSuccess  {boolean} obj.success     Whether user was successfully logged-in
   *
   * @apiSuccessExample {json} Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *         "success": true,
   *         "data": {}
   *
   */
  @del("/:isbn", function() {
    return compose([this.isAuthorized(), this.isAdmin()]);
  })
  async delete(ctx) {
    const {isbn} = ctx.params;

    await this.bookService.delete(isbn);

    ctx.body = {
      success: true
    };
  }

  /**
   * @apiDescription
   * Updates book in database
   *
   * @api {patch}  /books/:isbn             Books
   * @apiName     BookDelete
   * @apiGroup    Books
   * @apiVersion  1.0.0
   *
   *
   * @apiSuccess  {Object}  obj             Response object
   * @apiSuccess  {boolean} obj.success     Whether user was successfully logged-in
   * @apiSuccess  {Object}  obj.data	      Updated book
   *
   * @apiSuccessExample {json} Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *         "success": true,
   *         "data": {}
   *
   */
  @patch("/:isbn", function() {
    return compose([this.isAuthorized(), this.isAdmin()]);
  })
  async update(ctx) {
    const {isbn} = ctx.params;
    const body = ctx.request.body;
    const data = await this.bookService.update(isbn, body);

    ctx.body = {
      success: true,
      data: data
    };
  }
}
