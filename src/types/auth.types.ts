import { Response } from "express";
import { Types } from "mongoose";

export interface GenerateTokenTypes {
  res: Response,
  id: Types.ObjectId,
}
