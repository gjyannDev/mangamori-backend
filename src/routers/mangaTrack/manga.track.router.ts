import { Router } from "express";
import {
  getCompletedData,
  getDroppedData,
  getOnHoldData,
  getPlanToReadData,
  getReadingData,
  viewStatusDetails,
} from "../../controllers/mangaTrack/manga.track.controller.js";

const manga_track_router = Router();

//Get status data - for using in tabs
manga_track_router.get("/reading", getReadingData);
manga_track_router.get("/completed", getCompletedData);
manga_track_router.get("/plantoread", getPlanToReadData);
manga_track_router.get("/dropped", getDroppedData);
manga_track_router.get("/onhold", getOnHoldData);

//Get status data per details
manga_track_router.get("/:status/:id", viewStatusDetails);

export default manga_track_router;
