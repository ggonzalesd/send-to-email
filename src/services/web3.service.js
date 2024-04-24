import nodemailer from 'nodemailer';
import config from './../config/config.js';

const { SERVICE, EMAIL, PASSWORD, EMAIL_TO } = config;

export class Web3Service {
  async sendEmail(firstname, lastname, email, comment) {
    const transport = nodemailer.createTransport({
      service: SERVICE,
      auth: {
        user: EMAIL,
        pass: PASSWORD,
      },
    });

    const mailOptions = {
      from: EMAIL,
      to: EMAIL_TO,
      subject: `[Contactar]: de ${firstname} 🚀`,
      text: `Quiero contactar con ustedes sobre lo siguiente:`,
      html: this.htmlGenerator(firstname, lastname, email, comment),
    };

    const sendEmail = (mailOptions) => {
      return new Promise((resolve, reject) => {
        transport.sendMail(mailOptions, (error, info) => {
          if (error) {
            return reject({ ok: false, error });
          }
          resolve({ ok: true, info });
        });
      });
    };

    const data = await sendEmail(mailOptions);

    return data;
  }

  htmlGenerator(firstname, lastname, email, comment) {
    return `<html lang="es">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width" initial-scale=1.0">
      <title>Contactar</title>
      <style>
        body: {
          font-family: Arial, sans-serif;
        }
      </style>
    </head>
    <body>
      <div>
        <h4>Nombre: ${firstname} ${lastname}</h4>
        <h4>Email: ${email}</h4>
        <br/>
        <p>
          ${comment}
        </p>
      <div>
    </body>
    </html>
    `;
  }
}
