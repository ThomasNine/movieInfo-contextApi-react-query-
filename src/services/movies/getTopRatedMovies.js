import { ApiKey } from "../../lib/constant";
import { api } from "../baseUrl";

const getTopRatedMovies = async (currentPage) => {
  try {
    const res = await api.get(`/movie/top_rated`, {
      params: {
        page: currentPage,
      },
    });
    return res.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export { getTopRatedMovies };
