import { NextFunction, Response } from 'express';

import * as log from 'src/utils/logs';


export interface HttpError extends Error {
  statusCode: number;
  message: string;
}

interface ErrorResponse {
  message: string;
}

export const notFoundError = (res: Response) => {
  const response: ErrorResponse = {
    message: 'resource not found',
  };

  res.status(404).send(response);
};

export const clientError = (err: HttpError, res: Response, next: NextFunction) => {
  if (err.statusCode) {
    const response: ErrorResponse = {
      message: err.message,
    };

    res.status(err.statusCode).send(response);
  } else {
    next(err);
  }
};

export const serverError = (err: Error, res: Response, next: NextFunction) => {
  log.error('Error', err);
  if (process.env.NODE_ENV === 'production') {
    res.status(500).send('Internal Server Error');
  } else {
    res.status(500).send(err.stack);
  }
};
