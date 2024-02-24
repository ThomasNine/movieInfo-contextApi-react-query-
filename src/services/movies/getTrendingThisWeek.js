import { ApiKey } from "../../lib/constant";
import { api } from "../baseUrl";

const getTrendingThisWeek = async () => {
  try {
    const resquest = await api.get("trending/all/week?api_key=" + ApiKey);
    return resquest.data.results;
  } catch (e) {
    throw new Error(e.message);
  }
};

export { getTrendingThisWeek };
