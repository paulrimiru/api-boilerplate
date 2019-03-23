import dotenv from 'dotenv';
import express, { Express } from 'express';
import http, { Server } from 'http';

import middleware from './middleware';
import errorHandlers from './middleware/errorHandlers';
import routes from './modules';
import { applyMiddleware, applyRoutes } from './utils';
import * as log from './utils/Logs';

dotenv.config();

process.on('uncaughtException', (e) => {
  log.error('uncaughtException', e);
  process.exit(1);
});

process.on('unhandledRejection', (e) => {
  log.error('unhandledRejection', e);
  process.exit(1);
});

let app: Express;
let server: Server;

export const initServer = () => {
  app = express();

  applyMiddleware(middleware, app);
  applyRoutes(routes, app);
  applyMiddleware(errorHandlers, app);

  const { PORT } = process.env;

  if (!server) {
    server = http.createServer(app);

    server.listen(PORT, () =>
      log.info(`Server is running http://localhost:${PORT}/api-docs`),
    );
  }

  return {
    app,
    server,
  };
};


initServer();

