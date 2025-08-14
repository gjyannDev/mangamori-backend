export interface DiscoverRawData {
  id: string;
  type: "manga" | "manhwa";
  attributes: {
    title: {
      en: string;
    };
    description: {
      en: string;
    };
    lastVolume: string;
    lastChapter: string;
    status: string;
    year: number;
  };
}

export interface DiscoverSimplifiedData {
  id: string;
  type: "manga" | "manhwa";
  title: string;
  description: string;
  lastVolume: string;
  lastChapter: string;
  status: string;
  year: number;
}
