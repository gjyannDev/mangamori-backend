import { NextFunction, Request, Response } from "express";
import User from "../../models/user.model.js";
import { signInSchema, signUpSchema } from "../../schemas/user.schemas.js";
import generateToken from "../../utils/generate.token.js";

export async function postSignIn(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const parse_body = signInSchema.parse(req.body);

    const { email, password } = parse_body;

    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
      const params = {
        res: res,
        id: user._id,
      };

      generateToken(params);

      return res.status(200).json({
        success: true,
        message: "Sign in sucessfull",
        user: {
          _id: user._id,
          email: user.email,
          role: user.role,
        },
        type: "auth",
      });
    } else {
      res
        .status(400)
        .json({
          success: false,
          message: "Email or password is not valid.",
          type: "auth",
        });
    }
  } catch (error) {
    next(error);
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
      success: true,
      message: "Sign up sucessfull",
      user: {
        _id: (await user).id,
        email: (await user).email,
        role: (await user).role,
      },
    });
  } else {
    res.status(400).json();
    throw new Error("Invalid user data");
  }

  return res.status(200).json(user);
}
