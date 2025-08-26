import { Response } from "express";
import { Model, Types } from "mongoose";

export interface GenerateTokenTypes {
  res: Response;
  id: Types.ObjectId;
}

export interface AuthTypes {
  email: string;
  password: string;
}

export interface UserModelTypes {
  id: Types.ObjectId;
  email: string;
  password: string;
  role: string;
}

export interface UserModelMethods {
  matchPassword(enteredPassword: string): Promise<boolean>;
}

export interface UserModel extends Model<UserModelTypes, {}, UserModelMethods> {
  // signIn(credentials: {
  //   email: string;
  //   password: string;
  // }): Promise<UserModelTypes | null>;
}
