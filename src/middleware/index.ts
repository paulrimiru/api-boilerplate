import {
  handleCors,
  handleBodyRequestParsing,
  handleCompression,
} from "./common";
import { handleAPIDocs } from "./apiDocs";
import { redisMiddleware } from './redis';

export default [
  handleCors,
  handleBodyRequestParsing,
  handleCompression,
  handleAPIDocs,
  redisMiddleware,
];