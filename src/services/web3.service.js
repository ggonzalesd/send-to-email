import nodemailer from 'nodemailer';
import { MailtrapClient } from 'mailtrap';
import config from './../config/config.js';
import { transport } from './../lib/web3.email.js';

const { HOST, USER, EMAIL, PASSWORD, EMAIL_TO, DOMAIN } = config;

const client = new MailtrapClient({
  token: PASSWORD,
})

export class Web3Service {
  async sendEmailFromApi(firstname, lastname, email, comment) {
    const mailOptions = {
      from: {
        email: `mailtrap@${DOMAIN}`,
        name: 'Mailtrap Test',
      },
      to: [ {email: email} ],
      subject: `[Contactar]: de ${firstname} 🚀`,
      text: `Quiero contactar con ustedes sobre lo siguiente:`,
      html: this.htmlGenerator(firstname, lastname, email, comment),
    };

    const data = await client.send(mailOptions)

    return data;
  }

  async sendEmail(firstname, lastname, email, comment) {
    const mailOptions = {
      from: `info@${DOMAIN}`,
      to: [ email ],
      subject: `[Contactar]: de ${firstname} 🚀`,
      text: `Quiero contactar con ustedes sobre lo siguiente:`,
      html: this.htmlGenerator(firstname, lastname, email, comment),
    };

    /* const sendEmail = (mailOptions) => {
      return new Promise((resolve, reject) => {
        transport.sendMail(mailOptions, (error, info) => {
          if (error) {
            console.log(error)
            return reject(error);
          }
          resolve(info);
        });
      });
    }; */

    // const data = await sendEmail(mailOptions);

    const data = await transport.sendMail(mailOptions);

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
