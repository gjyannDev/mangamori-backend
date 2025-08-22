import { Router } from "express";
import { postSignIn, postSignUp } from "../../controllers/auth/auth.controller.js";

const auth_router = Router();

// log in routes
// auth_router.get("signin", signIn);
auth_router.post("/signin", postSignIn);

// sign up routes
// auth_router.get("signup", signUp);
auth_router.post("/signup", postSignUp);

export default auth_router;
