import dotenv from 'dotenv';
import { Request, Response } from 'express';
import { ResponseBody, ResponseStatus } from '../interfaces';

dotenv.config();

const { BASE_URL } = process.env;

export default [
  {
    path: `${BASE_URL}/`,
    method: 'get',
    handler: async (req: Request, res: Response) => {
      const response: ResponseBody = {
        status: ResponseStatus.success,
        data: {
          message: 'hello you',
        },
      };

      res.send(response);
    },
  },
];
