import { Router } from "express";
import { getCompletedData, getDroppedData, getOnHoldData, getPlanToReadData, getReadingData } from "../../controllers/mangaTrack/manga.track.controller.js";

const manga_track_router = Router();

//Get status data - for using in tabs
manga_track_router.get("/reading", getReadingData);
manga_track_router.get("/completed", getCompletedData);
manga_track_router.get("/plantoread", getPlanToReadData);
manga_track_router.get("/dropped", getDroppedData);
manga_track_router.get("/onhold", getOnHoldData);

//Get status data per details
manga_track_router.get("/reading/:id", );
manga_track_router.get("/completed/:id", );
manga_track_router.get("/plantoread/:id", );
manga_track_router.get("/dropped/:id", );
manga_track_router.get("/onhold/:id", );

export default manga_track_router;
