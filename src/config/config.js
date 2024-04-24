import dotenv from 'dotenv';

dotenv.config();

export default {
  PORT: process.env.PORT ?? 3000,
  SERVICE: process.env.SERVICE ?? 'Gmail',
  EMAIL: process.env.EMAIL ?? 'example@gmail.com',
  PASSWORD: process.env.PASSWORD ?? '1234',
  EMAIL_TO: process.env.EMAIL_TO ?? 'example@hotmail.com',
};
