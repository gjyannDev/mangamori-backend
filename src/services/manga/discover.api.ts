import mangadex from "../api/mangadex.api.js";

export async function getTrendingSeries() {
  try {
    const res = await mangadex.get("/manga", {
      params: {
        limit: 16,
        order: {
          followedCount: "desc",
        },
        includes: ["cover_art"],
      },
    });

    const manga_data = res.data.data;
    const manga_ids = manga_data.map((manga: any) => manga.id);

    return {
      trendingData: manga_data,
      mangaIds: manga_ids,
    };
  } catch (error: any) {
    console.error(
      "Error fetching API data: ",
      error.response?.data || error.message
    );
    throw new Error("Error Fetching Data");
  }
}

export async function getTopRatedSeries() {
  try {
    const res = await mangadex.get("/manga", {
      params: {
        limit: 16,
        order: {
          rating: "desc",
        },
      },
    });

    return res.data;
  } catch (error: any) {
    console.error(
      "Error fetching API data: ",
      error.response?.data || error.message
    );
    throw new Error("Error Fetching Data");
  }
}

export async function getNewRealeaseSeries() {
  try {
    const res = await mangadex.get("/manga", {
      params: {
        limit: 16,
        order: {
          createdAt: "desc",
        },
      },
    });

    return res.data;
  } catch (error: any) {
    console.error(
      "Error fetching API data: ",
      error.response?.data || error.message
    );
    throw new Error("Error Fetching Data");
  }
}
