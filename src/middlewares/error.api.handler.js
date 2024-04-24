async function boomErrorHandler(err, req, res, next) {
  if (err.isBoom) {
    const { output } = err;
    res.status(output.statusCode).json({
      ok: false,
      ...output.payload,
    });
  } else {
    next(err);
  }
}

async function serverErrorHandler(err, req, res, next) {
  res.status(500).json({
    ok: false,
    message: err.message,
    stack: err.stack,
  });
}

function applyHandlers(app) {
  app.use(boomErrorHandler);
  app.use(serverErrorHandler);
}

export default applyHandlers;
