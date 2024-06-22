import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

class Controller {
  req: Request;
  res: Response;

  constructor(req: Request , res: Response) {
    this.req = req;
    this.res = res;
  }

  getSuccessStatusCode() {
    const isPostOrPut = ['POST', 'PUT'].includes(this.req.method);
    return isPostOrPut ? StatusCodes.CREATED : StatusCodes.OK;
  }

  success(data: Record<string, unknown>) {
    return this.res.status(this.getSuccessStatusCode()).json({ data });
  }

  error(statusCode: StatusCodes, errors: Record<string, unknown>) {
    return this.res.status(statusCode).json({ errors });
  }

  async handle(): Promise<void> {}

  async send() {
    this.handle().catch((err) =>
      this.error(err.status || StatusCodes.INTERNAL_SERVER_ERROR, {
        raw: err.message,
      })
    );
  }
}

export default Controller;
