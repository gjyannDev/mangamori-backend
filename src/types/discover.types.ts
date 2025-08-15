export interface Relationship {
  id: string;
  type: string;
  attributes: {
    fileName: string;
    description: string;
    volume: string;
    createdAt: string;
    updatedAt: string;
    version: number;
  };
}

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
  relationships: Relationship[]
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


export interface CoverUrlTypes {
  id: string;
  coverUrl: string
}
