import { StatusCodes } from 'http-status-codes';

class InternalServerError extends Error {
  constructor(message = 'Internal Server Error') {
    super(message);
    this.name = this.constructor.name;
    this.status = StatusCodes.INTERNAL_SERVER_ERROR;
  }
}

export default InternalServerError;
