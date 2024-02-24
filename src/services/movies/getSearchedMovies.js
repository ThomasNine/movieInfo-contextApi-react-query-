import { api } from "../baseUrl";

const getSearchedMovies = async (currentPage, searchKeywords) => {
  try {
    const res = await api.get(`search/movie`, {
      params: { query: searchKeywords, page: currentPage },
    });

    return res.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export { getSearchedMovies };
