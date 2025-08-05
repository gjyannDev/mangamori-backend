import { Router } from "express";
import { getHomepage } from "../../controllers/homepage/homepage.controller.js";

const homepage_router = Router();

homepage_router.get("/", getHomepage)

export default homepage_router;
