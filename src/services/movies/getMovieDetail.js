import { api } from "../baseUrl";

const getMovieDetail = async (movieId) => {
  try {
    const res = await api.get(`/movie/${movieId}`);
    return res.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export { getMovieDetail };
