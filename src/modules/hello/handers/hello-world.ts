import { Request, Response } from 'express';

import { ResponseBody, ResponseStatus } from 'src/modules/interfaces';

export const getHello = async (req: Request, res: Response) => {
  const response: ResponseBody = {
    status: ResponseStatus.success,
    data: {
      message: 'hello you',
    },
  };

  res.send(response);
};
