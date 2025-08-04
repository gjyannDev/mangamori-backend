import { Router } from "express";
import {
  getNewRealeases,
  getTopRated,
  getTrending,
} from "../../controllers/discover/discover.controller.js";

const discover_router = Router();

discover_router.get("/trending", getTrending);
discover_router.get("/toprated", getTopRated);
discover_router.get("/newrealease", getNewRealeases);

export default discover_router;
