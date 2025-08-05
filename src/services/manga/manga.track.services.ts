import { MangaTrack } from "../../models/manga.track.model.js";

export async function getMangaTrackStatusData(status: string) {
  try {
    const result = await MangaTrack.find({ status: status })
      .populate("mangaEntry")
      .exec();

    if (!result) {
      console.warn("No manga track data found.");
      return null;
    }

    return result;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Failed to fetch manga track status data:", error.message);
    } else {
      console.error("Unknown error occurred in getReadingStatusData:", error);
    }

    throw new Error("Failed to retrieve manga track status data");
  }
}
