import { api } from "../baseUrl";

const getNowPlayingMovies = async (currentPage) => {
  try {
    const res = await api.get(`movie/now_playing`, {
      params: {
        page: currentPage,
      },
    });

    return res.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export { getNowPlayingMovies };
