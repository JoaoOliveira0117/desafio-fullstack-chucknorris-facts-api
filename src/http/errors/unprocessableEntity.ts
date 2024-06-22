import { StatusCodes } from 'http-status-codes';

class UnprocessableEntity extends Error {
  constructor(message = 'Not Found') {
    super(message);
    this.name = this.constructor.name;
    this.status = StatusCodes.UNPROCESSABLE_ENTITY;
  }
}

export default UnprocessableEntity;
