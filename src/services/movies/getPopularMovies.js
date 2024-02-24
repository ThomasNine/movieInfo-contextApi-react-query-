import { ApiKey } from "../../lib/constant";
import { api } from "../baseUrl";

const getPopularMovies = async (currentPage) => {
  try {
    const res = await api.get(`movie/popular`, {
      params: {
        page: currentPage,
      },
    });
    return res.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export { getPopularMovies };
