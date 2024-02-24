import { api } from "../baseUrl";

const getTopRatedTv = async (currentPage) => {
  try {
    const res = await api.get("tv/top_rated", {
      params: {
        page: currentPage,
      },
    });

    return res.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export { getTopRatedTv };
