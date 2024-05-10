import nodemailer from 'nodemailer';
import config from './../config/config.js';

const { HOST, PORT, USER, PASSWORD } = config;

export const transport = nodemailer.createTransport({
  // service: SERVICE,
  host: HOST,
  port: PORT,
  secure: false,
  auth: {
    user: USER,
    pass: PASSWORD,
  },
});
