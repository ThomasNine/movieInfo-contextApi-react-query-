import { api } from "../baseUrl";

const getPopularTv = async (currentPage) => {
  try {
    const res = await api.get("tv/popular", {
      params: {
        page: currentPage,
      },
    });
    return res.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export { getPopularTv };
