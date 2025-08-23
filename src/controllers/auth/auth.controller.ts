import { Request, Response } from "express";
import User from "../../models/user.model.js";
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
  try {
    const { name, email, password } = req.body;

    const user = User.create({
      name,
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
      res.status(400);
      throw new Error("Invalid user data");
    }

    return res.status(200).json(user);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(400).send("Error, user not created");
      console.error("Error sign up - Controller: ", error.message);
    } else {
      console.error("Unkown sign up error", error);
    }
  }
}
