import dotenv from 'dotenv';

import { getHello } from './handers/hello-world';

dotenv.config();

const { BASE_URL } = process.env;

export default [
  {
    path: `${BASE_URL}/`,
    method: 'get',
    handler: getHello,
  },
];
