import dotenv from 'dotenv';
import express from 'express';
import http from 'http';

import middleware from './middleware';
import errorHandlers from './middleware/errorHandlers';
import initDB from './models';
import routes from './modules';
import { applyMiddleware, applyRoutes } from './utils';

dotenv.config();

process.on('uncaughtException', (e) => {
  console.log(e);
  process.exit(1);
});

process.on('unhandledRejection', (e) => {
  console.log(e);
  process.exit(1);
});

initDB();

const router = express();
applyMiddleware(middleware, router);
applyRoutes(routes, router);
applyMiddleware(errorHandlers, router);

const { PORT } = process.env;
const server = http.createServer(router);

server.listen(PORT, () =>
  console.log(`Server is running http://localhost:${PORT}/api-docs`),
);
