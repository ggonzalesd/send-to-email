import joi from 'joi';

const firstname = joi.string();
const lastname = joi.string();
const email = joi.string().email();
const comment = joi.string();

export const web3PostSchema = joi.object({
  firstname: firstname.required(),
  lastname: lastname.required(),
  email: email.required(),
  comment: comment.required(),
});
