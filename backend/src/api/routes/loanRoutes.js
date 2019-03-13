import compose from "koa-compose";
import controller, {get, post, del, put} from "inra-server-http/dest/router";
import loanServices from "../services/loanServices";
import {paginateFunction} from "../../utils/paginateUtils";

@controller("/loan")
export default class UserRouter {
  constructor(dependencies) {
    this.database = dependencies.database;
    this.logger = dependencies.logger;

    this.loanService = loanServices(this.database, this.logger);
  }

  @get("/:page")
  async fetchAll(ctx) {
    const data = await this.loanService.fetchAll();
    const {page} = ctx.params;
    const pages = data.length / 50 > 1 ? data.length / 50 : 1;

    ctx.body = {
      success: true,
      data: paginateFunction(data, page, 50),
      pages
    };
  }

  @post("/", function() {
    return compose([this.isAuthorized(), this.isAdmin()]);
  })
  async create(ctx) {
    const {username, isbn, days} = ctx.request.body;
    const data = await this.loanService.create({
      username,
      isbn,
      days
    });

    ctx.body = {
      success: true,
      data
    };
  }

  @del("/:id", function() {
    return compose([this.isAuthorized(), this.isAdmin()]);
  })
  async delete(ctx) {
    const {id} = ctx.params;
    const data = await this.loanService.delete(id);

    ctx.body = {
      success: true,
      data
    };
  }
}
