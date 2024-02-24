import { api } from "../baseUrl";

const getMovieGenreList = async () => {
  try {
    const res = await api.get(`genre/movie/list`);

    return res.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export { getMovieGenreList };
