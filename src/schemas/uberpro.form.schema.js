import joi from 'joi';

const asunto = joi.string();
const pais = joi.string();
const nombre = joi.string();
const numero = joi.string();
const email = joi.string().email();
const comment = joi.string();

export const uberproPostSchema = joi.object({
  asunto: asunto.required(),
  pais: pais.required(),
  nombre: nombre.required(),
  numero: numero.required(),
  email: email.required(),
  comment: comment.required(),
});
