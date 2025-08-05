import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import "./models/indexLoader.js";
import discover_router from "./routers/discover/discover.router.js";
import { connecToDatabase } from "./services/db/mongo.connection.js";
import manga_track_router from "./routers/mangaTrack/manga.track.router.js";

dotenv.config();
const PORT = process.env.PORT;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static(path.join(__dirname, "styles")));
app.use("/assets", express.static(path.join(__dirname, "assets")));

app.use("/discover", discover_router);


connecToDatabase().then(() => {
  app.listen(PORT, () => {
    console.log(`Serving is running on http://localhost:${PORT}`);
    console.log(mongoose.modelNames()); // Should include "MangaEntry"
  });
});
