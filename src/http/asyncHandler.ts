import { Request, Response } from "express";
import Controller from "../config/api/controller";

const asyncHandler = (Controller: new (req: Request, res: Response) => Controller) => {
  return async function (req: Request, res: Response) {
    const controller = new Controller(req, res);
    await controller.send();
  };
};

export default asyncHandler;
