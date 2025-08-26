import { success, ZodError } from "zod";
import { signUpSchema } from "../schemas/user.schemas.js";
import { ErrorMiddlewareTypes } from "../types/middleware.types.js";

export function errorHandler({ err, req, res, next }: ErrorMiddlewareTypes) {
  let message = err.message;

  if (err instanceof ZodError) {
    return res
      .status(404)
      .json({ success: false, errors: (err as ZodError).issues });
  } else if (err instanceof Error) {
    console.error("Error: ", message);
    return res.status(404).json({ success: false, message: message });
  } else {
    console.error("Unknown error: ", err);
    return res.status(500).json({ success: false, message: "Unkown error." });
  }
}
