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
      let body = {...defaultError};
      errors.forEach(instance => {
        if (error instanceof instance) {
          body.message = error.message;
          body.httpStatus = error.httpStatus;
          body.errorCode = error.errorCode;
        }
      });

      logger.error(error.message);
      ctx.status = body.httpStatus;
      ctx.body = {
        success: false,
        error: body
      };
    }
  };
}
export default errorMiddleware;
