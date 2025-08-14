import type {
  DiscoverRawData,
  DiscoverSimplifiedData,
} from "../types/discover.types.js";

export function simplifiedMangaData(
  data: DiscoverRawData[]
): DiscoverSimplifiedData[] {
  return data.map((item) => ({
    id: item.id,
    type: item.type,
    title: item.attributes.title.en,
    description: item.attributes.description.en,
    lastVolume: item.attributes.lastVolume,
    lastChapter: item.attributes.lastChapter,
    status: item.attributes.status,
    year: item.attributes.year,
  }));
}
