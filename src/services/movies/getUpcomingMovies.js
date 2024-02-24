import { ApiKey } from "../../lib/constant";
import { api } from "../baseUrl";

const getUpcomingMovies = async (currentPage) => {
  try {
    const res = await api.get(`/movie/upcoming`, {
      params: {
        page: currentPage,
      },
    });
    return res.data;
  } catch (e) {
    throw new Error(e.message);
  }
};
export { getUpcomingMovies };
