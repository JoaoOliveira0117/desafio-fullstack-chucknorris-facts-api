import { StatusCodes } from 'http-status-codes';

class UnprocessableEntity extends Error {
  status: StatusCodes;
  
  constructor(message = 'Not Found') {
    super(message);
    this.name = this.constructor.name;
    this.status = StatusCodes.UNPROCESSABLE_ENTITY;
  }
}

export default UnprocessableEntity;
