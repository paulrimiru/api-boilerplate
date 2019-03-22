import dotenv from 'dotenv';
import { addUser } from './handlers/users';

dotenv.config();

const { BASE_URL } = process.env;

export default [
  {
    path: `${BASE_URL}/user`,
    method: 'post',
    handler: addUser,
  },
];
