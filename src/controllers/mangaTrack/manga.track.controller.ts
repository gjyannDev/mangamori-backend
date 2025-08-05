import { Request, Response } from "express";
import { getMangaTrackStatusData } from "../../services/manga/manga.track.services.js";

export async function getReadingData(req: Request, res: Response) {
  try {
    const result = await getMangaTrackStatusData("reading");

    return res.json(result);
  } catch (error: any) {
    if (error instanceof Error) {
      console.error("Failed to fetch reading status data:", error.message);
    } else {
      console.error(
        "Unknown error occurred in getMangaTrackStatusData:",
        error
      );
    }

    throw new Error("Failed to retrieve completed data");
  }
}

export async function getCompletedData(req: Request, res: Response) {
  try {
    const result = await getMangaTrackStatusData("completed");

    return res.json(result);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Failed to fetch completed status data:", error.message);
    } else {
      console.error(
        "Unknown error occurred in getMangaTrackStatusData:",
        error
      );
    }

    throw new Error("Failed to retrieve completed data");
  }
}

export async function getPlanToReadData(req: Request, res: Response) {
  try {
    const result = await getMangaTrackStatusData("plan to read");

    return res.json(result);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Failed to fetch plan to read status data:", error.message);
    } else {
      console.error(
        "Unknown error occurred in getMangaTrackStatusData:",
        error
      );
    }

    throw new Error("Failed to retrieve plan to read data");
  }
}

export async function getDroppedData(req: Request, res: Response) {
  try {
    const result = await getMangaTrackStatusData("dropped");

    return res.json(result);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Failed to fetch dropped status data:", error.message);
    } else {
      console.error(
        "Unknown error occurred in getMangaTrackStatusData:",
        error
      );
    }

    throw new Error("Failed to retrieve dropped data");
  }
}

export async function getOnHoldData(req: Request, res: Response) {
  try {
    const result = await getMangaTrackStatusData("on hold");

    return res.json(result);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Failed to fetch on hold status data:", error.message);
    } else {
      console.error(
        "Unknown error occurred in getMangaTrackStatusData:",
        error
      );
    }

    throw new Error("Failed to retrieve on hold data");
  }
}
