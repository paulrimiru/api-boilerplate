import { Request, Response } from 'express';

import User from 'src/models/user';

import { UserRequestBody } from '../interfaces';

export const addUser = async (req: Request, res: Response) => {
  const userDetails: UserRequestBody = req.body;

  const user = new User({
    name: userDetails.name,
  });

  user.save()
    .then((savedUser: User) => res.send(savedUser))
    .catch(() => res.sendStatus(500).send({ message: 'failed to insert data' }));
};
