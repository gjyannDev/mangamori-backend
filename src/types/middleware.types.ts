import { NextFunction, Request, Response } from "express";

export interface ErrorMiddlewareTypes {
  err: Error;
  req: Request;
  res: Response;
  next: NextFunction;
}
