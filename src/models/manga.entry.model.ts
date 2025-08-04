import mongoose from "mongoose";

const manga_entry_schema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    authors: {
      type: [String],
      required: true,
    },
    coverImage: {
      type: String,
      required: true,
    },
    genres: {
      type: [String],
      default: [],
      required: true,
    },
    totalChapters: {
      type: Number,
      required: true,
      default: 0
    },
    status: {
      type: String,
      enum: ["reading", "completed", "plan to read", "dropped", "on hold"],
      default: "plan to read",
    },
    origin: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const MangaEntry = mongoose.model("MangaEntry", manga_entry_schema);
