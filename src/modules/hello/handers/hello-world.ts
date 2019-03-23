import { Request, Response } from 'express';

import { addUser } from 'src/controllers/user';
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

export const postHello = async (req: Request, res: Response) => {
  const result = await addUser(req.body);

  if (result.isRight()) {
    const response: ResponseBody = {
      status: ResponseStatus.success,
      data: result.value,
    };

    res.json(response);
  } else {
    const response: ResponseBody = {
      status: ResponseStatus.failed,
      data: result.value,
    };

    res.send(response);
  }
};
