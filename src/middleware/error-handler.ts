import { NextFunction, Request, Response, Router } from 'express';
import * as errors from 'src/utils/error-handler';

const handle404Error = (router: Router) => {
  router.use((req: Request, res: Response) => {
    errors.notFoundError(res);
  });
};

const handleClientError = (router: Router) => {
  router.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    errors.clientError(err as errors.HttpError, res, next);
  });
};

const handleServerError = (router: Router) => {
  router.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    errors.serverError(err, res, next);
  });
};

export default [handle404Error, handleClientError, handleServerError];
