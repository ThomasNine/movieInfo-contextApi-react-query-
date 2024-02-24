import { api } from "../baseUrl";

const getOnTheAir = async (currentPage) => {
  try {
    const res = await api.get("tv/on_the_air", {
      params: {
        page: currentPage,
      },
    });

    return res.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export { getOnTheAir };
