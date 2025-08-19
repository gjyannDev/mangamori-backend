import type {
  DiscoverRawData,
  DiscoverSimplifiedData,
} from "../types/discover.types.js";

export function simplifiedMangaDataArray(
  data: DiscoverRawData[]
): DiscoverSimplifiedData[] {
  return data.map((item) => ({
    id: item.id,
    type: item.type,
    title: item.attributes.title.en || item.attributes.title["ja-ro"],
    description: item.attributes.description.en,
    lastVolume: item.attributes.lastVolume,
    lastChapter: item.attributes.lastChapter,
    status: item.attributes.status,
    year: item.attributes.year,
  }));
}

export function simplifiedMangaData(
  data: DiscoverRawData
): DiscoverSimplifiedData {
  return {
    id: data.id,
    type: data.type,
    title: data.attributes.title.en || data.attributes.title["ja-ro"],
    description: data.attributes.description.en,
    lastVolume: data.attributes.lastVolume,
    lastChapter: data.attributes.lastChapter,
    status: data.attributes.status,
    year: data.attributes.year,
  };
}
