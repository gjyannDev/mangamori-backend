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

export async function getStatusDataById(id: string, status: string) {
  try {
    const res = await MangaTrack.findOne({ _id: id, status })
      .populate("mangaEntry")
      .exec();

    return res;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Failed to get status data by id: ", error.message);
    } else {
      console.error("Unknown error occurred in viewReadingDetails:", error);
    }

    throw new Error("Failed to retrieve manga track data by id");
  }
}
