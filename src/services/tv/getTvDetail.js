import { api } from "../baseUrl";

const getTvDetail = async (tvId) => {
  try {
    const res = await api.get(`/tv/${tvId}`);

    return res.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export { getTvDetail };
