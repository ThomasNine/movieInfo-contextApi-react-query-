import { api } from "../baseUrl";

const getTvGenreList = async () => {
  try {
    const res = await api.get(`genre/tv/list`);

    return res.data;
  } catch (error) {
    throw new Error(error.message);
  }
};
export { getTvGenreList };
