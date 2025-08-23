import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import "./models/indexLoader.js";
import auth_router from "./routers/auth/auth.router.js";
import discover_router from "./routers/discover/discover.router.js";
import homepage_router from "./routers/homepage/homepage.router.js";
import manga_track_router from "./routers/mangaTrack/manga.track.router.js";
import { connecToDatabase } from "./services/db/mongo.connection.js";

dotenv.config();

const PORT = process.env.PORT;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static(path.join(__dirname, "styles")));
app.use("/assets", express.static(path.join(__dirname, "assets")));

//Homepage routes
app.use("/", homepage_router);

//Other routes
app.use("/discover", discover_router);
app.use("/mangatrack", manga_track_router);
app.use("/auth", auth_router);

connecToDatabase().then(() => {
  app.listen(PORT, () => {
    console.log(`Serving is running on http://localhost:${PORT}`);
    console.log(mongoose.modelNames()); // Should include "MangaEntry"
  });
});
