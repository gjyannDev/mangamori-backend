import mongoose from "mongoose";

const manga_track_schema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    mangaEntry: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "MangaEntry",
    },
    status: {
      type: String,
      required: true,
    },
    currentChapter: {
      type: String,
      required: true,
      default: 0
    },
    startedAt: {
      type: Date,
      required: true,
    },
    completedAt: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);

export const MangaTrack = mongoose.model("MangaTrack", manga_track_schema);
