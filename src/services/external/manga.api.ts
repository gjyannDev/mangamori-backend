import {
  CoverUrlTypes,
  DiscoverRawData,
  Relationship,
} from "../../types/discover.types.js";
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

export async function getMangaCoverImageUrl(
  mangaData: CoverUrlTypes[],
) {
  try {
    const mangaWithCovers = mangaData.map((manga: any) => {
      const coverRel = manga.relationships.find(
        (rel: any) => rel.type === "cover_art"
      );

      return {
        id: manga.id,
        coverUrl: coverRel?.attributes?.fileName
          ? `https://uploads.mangadex.org/covers/${manga.id}/${coverRel.attributes.fileName}`
          : null,
      };
    });

    return mangaWithCovers
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error fetching manga statistics: ", error.message);
    } else {
      console.error("Unkown error", error);
    }
  }
}
