import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import { GenerateTokenTypes } from "../types/auth.types.js";

dotenv.config();

function generateToken({ res, id }: GenerateTokenTypes) {
  const jwt_secret = process.env.JWT_SECRET;

  if (!jwt_secret) {
    throw new Error("JWT_SECRET is not defined in env.");
  }

  const create_token = jwt.sign({ id }, jwt_secret, {
    expiresIn: "15d",
  });

  res.cookie("jwt", create_token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development",
    sameSite: "strict",
    maxAge: 30 * 24 * 60 * 60 * 1000,
  });
}

export default generateToken;
