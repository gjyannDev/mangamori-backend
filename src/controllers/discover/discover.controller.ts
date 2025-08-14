import { Request, Response } from "express";
import { getMangaStatistics } from "../../services/external/manga.api.js";
import {
  getNewRealeaseSeries,
  getTopRatedSeries,
  getTrendingSeries,
} from "../../services/manga/discover.api.js";
import { simplifiedMangaData } from "../../utils/manga.mappers.js";

export async function getTrending(req: Request, res: Response) {
  try {
    const { mangaIds, trendingData } = await getTrendingSeries();

    const stats = await getMangaStatistics(mangaIds);

    const formatted_data = simplifiedMangaData(trendingData.data);

    const merged_data = formatted_data.map((manga: any) => ({
      ...manga,
      statistics: stats[manga.id] || null,
    }));

    res.json(merged_data);
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
