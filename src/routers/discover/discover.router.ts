import { Router } from "express";
import {
  getMangaById,
  getNewRealeases,
  getTopRated,
  getTrending,
} from "../../controllers/discover/discover.controller.js";

const discover_router = Router();

discover_router.get("/trending", getTrending);
discover_router.get("/:type/:id", getMangaById);

discover_router.get("/toprated", getTopRated);
discover_router.get("/newrelease", getNewRealeases);

export default discover_router;
