import Server from "inra-server-http";

import {resolve} from "path";
import fs from "fs";
import {promisify} from "util";

const readdir = promisify(fs.readdir);

import load from "call-dir";

import body from "koa-body";
import cors from "@koa/cors";
import logger from "koa-logger";
import Koa from "koa";
import Router from "koa-router";

import errors from "./errors";
import {initDatabase} from "./Database";
import InternalServerError from "./api/errors/InternalServerError";

async function initServer(dependencies, config) {
  if (!dependencies.logger) {
    dependencies.logger = console;
  }

  const server = new Server({
    host: config.SERVER_HOST,
    port: config.SERVER_PORT
  });
  server.config = config;

  server.setEngine(new Koa());
  server.setRouter(new Router());
  for (const dependency in dependencies) {
    server[dependency] = dependencies[dependency];
  }
  server.use(errors({instance: InternalServerError}));
  server.use(logger());
  server.use(body());
  server.use(cors());
  server.use(server.router.routes());
  server.use(server.router.allowedMethods());
  try {
    const middlewares = await readdir(resolve(__dirname, "api/middlewares"));

    for (const middleware of middlewares) {
      server.import(resolve(__dirname, "api/middlewares/", middleware));
    }

    await load(resolve(__dirname, "api/routes"), src => server.import(src));
  } catch (error) {
    dependencies.logger.error(error);
  }

  return server;
}

export default async function(config) {
  const logger = console; // Just Set your fav logger here (Console for current purposes)

  const database = initDatabase({logger}, config);
  const server = await initServer({database, logger}, config);

  try {
    await database.connect();

    await server.run(config.SERVER_PORT, function() {
      logger.log(`Server running on ${config.SERVER_PORT}`);
    });
  } catch (error) {
    logger.error("A critial error occured on startup");
    logger.error(err);
  }
}
