import errors from "../errors";

const defaultError = {
  httpStatus: 500,
  message: "Internal Server Error"
};

function errorMiddleware({logger}) {
  return async function(ctx, next) {
    try {
      await next();
    } catch (error) {
      let locals = defaultError;

      errors.forEach(instance => {
        if (error instanceof instance) {
          locals = error;
        }
      });

      logger.error(error.message);
      ctx.status = locals.httpStatus;
      ctx.body = {
        success: false,
        error: locals
      };
    }
  };
}
export default errorMiddleware;
