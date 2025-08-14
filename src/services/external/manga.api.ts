import mangadex from "../api/mangadex.api.js";

export async function getMangaStatistics(mangaIds: string[]) {
  try {
    const res = await mangadex.get(`/statistics/manga`, {
      params: {
        manga: mangaIds,
      },
    });

    return res.data.statistics;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error fetching manga statistics: ", error.message);
    } else {
      console.error("Unkown error", error);
    }
  }
}

export async function getMangaCoverImageUrl() {}
