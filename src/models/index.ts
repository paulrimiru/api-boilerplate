import dotenv from "dotenv";
import { Sequelize } from 'sequelize-typescript';

import User from './user';

dotenv.config();

const { DB_NAME, USERNAME, PASSWORD } = process.env;

const initDB = () => {
  const sequelize =  new Sequelize({
    database: DB_NAME!,
    dialect: 'postgres',
    host: 'localhost',
    username: USERNAME!,
    password: PASSWORD!,
    operatorsAliases: false,
  });

  sequelize.addModels([User]);

  sequelize.sync({ force: true })
    .then(() => console.log('database syncd'))
    .catch(() => console.log('database sync failed'));

}

export default initDB;
