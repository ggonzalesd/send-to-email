import express from 'express';
import validationHandlerGeneration from '../middlewares/validation.handler.js';
import { uberproPostSchema } from '../schemas/uberpro.form.schema.js';
import { UberproService } from '../services/uberpro.service.js';

export const uberproRouter = express.Router();

const service = new UberproService();

uberproRouter.post(
  '/',
  validationHandlerGeneration(uberproPostSchema, 'body'),
  async (req, res, next) => {
    try {
      const { asunto, pais, nombre, numero, email, comentario } = req.body;

      const response = await service.sendEmail(
        asunto,
        pais,
        nombre,
        numero,
        email,
        comentario
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
