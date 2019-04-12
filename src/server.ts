import express, { Express } from 'express';
import http, { Server } from 'http';
import mongoose from 'mongoose';

import middleware from './middleware';
import errorHandlers from './middleware/error-handler';
import routes from './modules';
import { applyMiddleware, applyRoutes } from './utils';
import * as log from './utils/logs';
import { getConfig, setUpConfig } from './utils/setup';

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

const { PORT, MONGO_URL } = getConfig();

export const initServer = () => {
  setUpConfig();

  app = express();

  applyMiddleware(middleware, app);
  applyRoutes(routes, app);
  applyMiddleware(errorHandlers, app);


  if (!server) {
    server = http.createServer(app);

    server.listen(PORT, () =>
      log.info(`Server is running http://localhost:${PORT}/api-docs`),
    );
  }

  mongoSetup()
    .then(() => {
      log.info('Database connected');
    })
    .catch((err) => log.error('Failed with error', err));

  return {
    app,
    server,
  };
};

export const mongoSetup = async () => {
  await mongoose.connect(MONGO_URL!, { useNewUrlParser: true });
};

initServer();
