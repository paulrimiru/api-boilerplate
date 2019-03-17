import { Request, Response } from "express";

import dotenv from "dotenv";

dotenv.config();

const { BASE_URL } = process.env;

export default [
  {
    path: `${BASE_URL}/`,
    method: "get",
    handler: async (req: Request, res: Response) => {
      console.log(res.send)
      res.send("Hello world!");
    }
  }
];