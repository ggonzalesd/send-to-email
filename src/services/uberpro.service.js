import nodemailer from 'nodemailer';
import config from '../config/config.js';

const { SERVICE, EMAIL, PASSWORD, EMAIL_TO } = config;

export class UberproService {
  async sendEmail(asunto, pais, nombre, numero, email, comentario) {
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
      subject: `${asunto} 🚀`,
      // elige si usar [text] o [html]
      // text: `Quiero contactar con ustedes sobre lo siguiente:`,
      html: this.htmlGenerator(asunto, pais, nombre, numero, email, comentario),
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

  htmlGenerator(asunto, pais, nombre, numero, email, comentario) {
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
      <h3>Asunto: ${asunto}</h3>
      <div>
        <h4>Nombre: ${nombre}</h4>
        <h4>Email: ${email}</h4>
        <h4>País: ${pais}</h4>
        <h4>Número: ${numero}</h4>
        <br/>
        <p>
          ${comentario}
        </p>
      <div>
    </body>
    </html>
    `;
  }
}
