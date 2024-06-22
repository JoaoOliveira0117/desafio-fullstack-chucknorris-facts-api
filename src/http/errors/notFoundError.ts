import { StatusCodes } from 'http-status-codes';

class NotFoundError extends Error {
  constructor(message = 'Not Found') {
    super(message);
    this.name = this.constructor.name;
    this.status = StatusCodes.NOT_FOUND;
  }
}

export default NotFoundError;
