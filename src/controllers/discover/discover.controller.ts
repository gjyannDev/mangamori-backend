import { Request, Response } from "express";
import {
  getNewRealeaseSeries,
  getTopRatedSeries,
  getTrendingSeries,
} from "../../services/external/manga.api.js";

export async function getTrending(req: Request, res: Response) {
  try {
    const trending_series = await getTrendingSeries();

    res.json(trending_series);
  } catch (error) {
    console.error("Error fetching trending series: ", error);
    res.status(404).json({ error: "Failed to fetch trending manga" });
  }
}

export async function getTopRated(req: Request, res: Response) {
  try {
    const top_rated_series = await getTopRatedSeries();

    res.json(top_rated_series);
  } catch (error) {
    console.error("Error fetching top rated series: ", error);
    res.status(404).json({ error: "Failed to fetch trending manga" });
  }
}

export async function getNewRealeases(req: Request, res: Response) {
  try {
    const new_realeases = await getNewRealeaseSeries();

    res.json(new_realeases);
  } catch (error) {
    console.error("Error fetching new realease series: ", error);
    res.status(404).json({ error: "Failed to fetch trending manga" });
  }
}
