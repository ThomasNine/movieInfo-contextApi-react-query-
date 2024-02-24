import { api } from "../baseUrl";

const getAiringTodayTv = async (currentPage) => {
  try {
    const res = await api.get("tv/airing_today", {
      params: {
        page: currentPage,
      },
    });
    return res.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export { getAiringTodayTv };
