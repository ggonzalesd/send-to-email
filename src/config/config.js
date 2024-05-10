import dotenv from 'dotenv';

dotenv.config();

export default {
  APP_PORT: process.env.APP_PORT ?? 3000,
  DOMAIN: process.env.DOMAIN ?? '',
  ENDPOINT: process.env.ENDPOINT ?? '',
  PORT: process.env.PORT ?? 587,
  HOST: process.env.HOST ?? '',
  SERVICE: process.env.SERVICE ?? 'Gmail',
  EMAIL: process.env.EMAIL ?? 'example@gmail.com',
  USER: process.env.USER ?? '',
  PASSWORD: process.env.PASSWORD ?? '1234',
  EMAIL_TO: process.env.EMAIL_TO ?? 'example@hotmail.com',
};
