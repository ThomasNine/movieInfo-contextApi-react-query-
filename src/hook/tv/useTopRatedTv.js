import { useQuery } from "@tanstack/react-query";
import { getTopRatedTv } from "../../services/tv/getTopRatedTv";

const useTopRatedTv = (currentPage) => {
  const { data, isLoading, isError, error, isSuccess } = useQuery({
    queryKey: ["getTopRatedTv", currentPage],
    queryFn: () => getTopRatedTv(currentPage),
  });
  return { data, isLoading, isError, error, isSuccess };
};

export default useTopRatedTv;
