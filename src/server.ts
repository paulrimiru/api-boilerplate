import dotenv from 'dotenv';
import express from 'express';
import http from 'http';

import middleware from './middleware';
import errorHandlers from './middleware/errorHandlers';
import initDB from './models';
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

const app = express();

initDB()
  .then(() => {
    log.info('database sync complete');

    applyMiddleware(middleware, app);
    applyRoutes(routes, app);
    applyMiddleware(errorHandlers, app);

    const { PORT } = process.env;
    const server = http.createServer(app);

    server.listen(PORT, () =>
      log.info(`Server is running http://localhost:${PORT}/api-docs`),
    );
  })
  .catch((e) => log.error('database sync failed', e));

