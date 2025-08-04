import mangadex from "../api/mangadex.api.js";

export async function getTrendingSeries() {
  try {
    const res = await mangadex.get("/manga", {
      params: {
        limit: 16,
        order: {
          followedCount: "desc",
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
