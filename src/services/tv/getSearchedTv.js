import { api } from "../baseUrl";

const getSearchedTv = async (currentPage, searchKeywords) => {
  try {
    const res = await api.get(`search/tv`, {
      params: { query: searchKeywords, page: currentPage },
    });

    return res.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export { getSearchedTv };
