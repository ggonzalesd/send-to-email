import express from 'express';
import validationHandlerGeneration from './../middlewares/validation.handler.js';
import { web3PostSchema } from './../schemas/web3.form.schema.js';
import { Web3Service } from '../services/web3.service.js';

export const web3Router = express.Router();

const service = new Web3Service();

web3Router.post(
  '/',
  validationHandlerGeneration(web3PostSchema, 'body'),
  async (req, res, next) => {
    try {
      const { firstname, lastname, email, comment } = req.body;

      const response = await service.sendEmail(
        firstname,
        lastname,
        email,
        comment
      );

      if (response.ok) {
        return res.json({
          ok: true,
        });
      }
      next(new Error('No se pudo enviar el mensaje'));
    } catch (err) {
      next(err);
    }
  }
);
