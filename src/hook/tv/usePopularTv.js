import { useQuery } from "@tanstack/react-query";
import { getPopularTv } from "../../services/tv/getPopularTv";

const usePopularTv = (currentPage) => {
  const { data, isLoading, isError, error, isSuccess } = useQuery({
    queryKey: ["getPopularTv", currentPage],
    queryFn: () => getPopularTv(currentPage),
  });
  return { data, isLoading, isError, error, isSuccess };
};

export default usePopularTv;
