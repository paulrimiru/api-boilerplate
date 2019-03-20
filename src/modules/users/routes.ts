import { Request, Response } from "express";

import dotenv from "dotenv";
import User from "../../models/user";
import { UserRequestBody } from './interfaces';

dotenv.config();

const { BASE_URL } = process.env;

export default [
  {
    path: `${BASE_URL}/user`,
    method: "post",
    handler: async (req: Request, res: Response) => {
      const userDetails: UserRequestBody = req.body;
  
      const user = new User({
        name: userDetails.name
      })

      user.save()
        .then((savedUser) => res.send(savedUser))
        .catch(() => res.sendStatus(500).send({ message: 'failed to insert data' }));
    }
  }
];
