import { api } from "../baseUrl";

const getMovieTrailer = async (movieId) => {
  try {
    const res = await api.get(`movie/${movieId}/videos`);

    return res.data;
  } catch (error) {
    throw new Error(error.message);
  }
};
export { getMovieTrailer };
