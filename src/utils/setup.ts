import dotenv from 'dotenv';

export const setUpConfig = () => {
  dotenv.config();
};

export interface AppConstants {
  PORT: string;
  BASE_URL: string;
  MONGO_URL: string;
}

export const getConfig = (): AppConstants => {
  const {
    DEV_PORT, TEST_PORT, NODE_ENV, MONGO_URL_DEV, MONGO_URL_TEST, PORT, BASE_URL, MONGO_URL,
  } = process.env;

  switch (NODE_ENV) {
    case 'test':

      return {
        PORT: TEST_PORT!,
        BASE_URL: BASE_URL!,
        MONGO_URL: MONGO_URL_TEST!,
      };
    case 'development':

      return {
        PORT: DEV_PORT!,
        BASE_URL: BASE_URL!,
        MONGO_URL: MONGO_URL_DEV!,
      };
    default:

      return {
        PORT: PORT!,
        BASE_URL: BASE_URL!,
        MONGO_URL: MONGO_URL!,
      };
  }
};
