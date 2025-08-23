import { z } from "zod";

export const signInSchema = z.object({
  email: z.email(),
  password: z.string().min(10, "Password must be atleast 10 characters"),
});

export const signUpSchema = z.object({
  email: z.email({ message: "invalid email address" }),
  password: z
    .string()
    .min(8)
    .max(128)
    .regex(/[A-Z]/, "Must include an uppercase letter")
    .regex(/[a-z]/, "Must include a lowercase letteter")
    .regex(/[0-9]/, "Must include a number")
    .regex(/[\W_]/, "Must include a number"),
});
