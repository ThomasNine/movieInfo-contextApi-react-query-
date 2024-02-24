import { api } from "../baseUrl";

const getFilteredMovies = async (currentPage, genre, release_yr) => {
  try {
    const res = await api.get(`discover/movie`, {
      params: {
        page: currentPage,
        with_genres: genre,
        primary_release_year: release_yr,
      },
    });
    console.log(res.data);
    return res.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export { getFilteredMovies };
