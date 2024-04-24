import boom from '@hapi/boom';

function validationHandlerGeneration(schema, property) {
  return async (req, res, next) => {
    const data = req[property];
    const { error } = schema.validate(data);
    if (error) {
      next(boom.badRequest(error));
    }
    next();
  };
}

export default validationHandlerGeneration;
