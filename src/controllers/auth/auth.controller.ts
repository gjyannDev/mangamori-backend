import { Request, Response } from "express";
import User from "../../models/user.model.js";
import { signUpSchema } from "../../schemas/user.schemas.js";
import generateToken from "../../utils/generate.token.js";

export async function postSignIn(req: Request, res: Response) {
  try {
    return res.json("postSignIn is working");
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(400).send("Error, user not sign in");
      console.error("Error sign in - Controller: ", error.message);
    } else {
      console.error("Unkown sign in error", error);
    }
  }
}

export async function postSignUp(req: Request, res: Response) {
  const parse_body = signUpSchema.parse(req.body);

  const { email, password } = parse_body;

  const check_user = await User.findOne({ email });

  if (check_user) {
    res.status(400).send("User already exists");
    throw new Error("Error: User already exists");
  }

  const user = User.create({
    email,
    password,
  });

  if (user) {
    const params = {
      res: res,
      id: (await user)._id,
    };

    generateToken(params);

    res.status(201).json({
      _id: (await user)._id,
      email: (await user).email,
    });
  } else {
    res.status(400).json();
    throw new Error("Invalid user data");
  }

  return res.status(200).json(user);
}
