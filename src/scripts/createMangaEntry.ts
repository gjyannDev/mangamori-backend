import mongoose from "mongoose";
import dotenv from "dotenv";
import { connecToDatabase } from "../services/db/mongo.connection.js";
import { MangaEntry } from "../models/manga.entry.model.js";
import { MangaTrack } from "../models/manga.track.model.js";

dotenv.config();

async function seedMangaData() {
  try {
    await connecToDatabase();

    /* 1️⃣  Clean old data (optional while developing) */
    await MangaTrack.deleteMany({});
    await MangaEntry.deleteMany({});

    /* 2️⃣  Create a handful of MangaEntry docs */
    const mangaEntries = await MangaEntry.insertMany([
      {
        title: "One Piece",
        description: "Pirate adventure.",
        authors: ["Eiichiro Oda"],
        coverImage: "https://example.com/onepiece.jpg",
        genres: ["Action", "Adventure"],
        totalChapters: 1100,
        origin: "MangaDex",
      },
      {
        title: "Naruto",
        description: "Young ninja seeks recognition.",
        authors: ["Masashi Kishimoto"],
        coverImage: "https://example.com/naruto.jpg",
        genres: ["Action", "Shounen"],
        totalChapters: 700,
        origin: "MangaDex",
      },
      {
        title: "Attack on Titan",
        description: "Humanity vs. Titans.",
        authors: ["Hajime Isayama"],
        coverImage: "https://example.com/aot.jpg",
        genres: ["Action", "Drama"],
        totalChapters: 139,
        origin: "MangaDex",
      },
    ]);

    console.log(`✅  Inserted ${mangaEntries.length} manga entries`);

    /* 3️⃣  Create matching MangaTrack docs
       ──────────────────────────────────────
       Because your schema marks *both* startedAt *and*
       completedAt as **required: true**, we **must**
       supply a completedAt even for “reading / on-hold / plan”
       statuses, otherwise the insert will fail.
    */
    const sampleUserId = new mongoose.Types.ObjectId();   // replace w/ real user ID later
    const statuses      = ["reading", "completed", "plan to read"];

    const mangaTracks = mangaEntries.map((entry, idx) => {
      const status = statuses[idx % statuses.length];

      // startedAt: random date in 2024
      const started = new Date(2024, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1);

      // completedAt:
      //   • if status === "completed"  → started + 30-120 days
      //   • else                       → same as started (satisfies “required” field)
      const completed = new Date(started);
      completed.setDate(
        completed.getDate() + (status === "completed" ? Math.floor(Math.random() * 90) + 30 : 0)
      );

      return {
        userId: sampleUserId,
        mangaEntry: entry._id,
        status,
        currentChapter: (Math.floor(Math.random() * (entry.totalChapters ?? 50)) + 1).toString(),
        startedAt: started,
        completedAt: completed,
      };
    });

    const trackResult = await MangaTrack.insertMany(mangaTracks);
    console.log(`✅  Inserted ${trackResult.length} manga tracks`);

    /* 4️⃣  Quick sanity-check: populate works */
    const test = await MangaTrack.findOne().populate("mangaEntry");
    // console.log("\n🧪  Populate check →", {
    //   trackStatus: test.status,
    //   mangaTitle:  test.mangaEntry.title,
    // });
  } catch (err) {
    console.error("❌  Seeding failed:", err);
  } finally {
    process.exit();
  }
}

seedMangaData();
