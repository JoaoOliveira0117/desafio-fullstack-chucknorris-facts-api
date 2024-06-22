import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

const error = (err: Error & { status: StatusCodes }, _: Request, res: Response, __: NextFunction) => {
  res.status(err.status || 500);
  res.json({
    errors: {
      message: err.message,
    },
  });
};

export default error;
