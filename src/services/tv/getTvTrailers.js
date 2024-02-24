import { api } from "../baseUrl";

const getTvTrailers = async (TvId) => {
  try {
    const res = await api.get(`tv/${TvId}/videos`);

    return res.data;
  } catch (error) {
    throw new Error(error.message);
  }
};
export { getTvTrailers };
