import { api } from "../baseUrl";

const getFilteredTv = async (currentPage, genre, release_yr) => {
  try {
    const res = await api.get(`discover/tv`, {
      params: {
        page: currentPage,
        with_genres: genre,
        first_air_date_year: release_yr,
      },
    });

    return res.data;
  } catch (error) {
    throw new Error(error.message);
  }
};
export { getFilteredTv };
