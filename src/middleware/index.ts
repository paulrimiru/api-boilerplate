import { handleAPIDocs } from './api-docs';
import {
  handleBodyRequestParsing,
  handleCompression,
  handleCors,
} from './common';

export default [
  handleCors,
  handleBodyRequestParsing,
  handleCompression,
  handleAPIDocs,
  // redisMiddleware,
];
