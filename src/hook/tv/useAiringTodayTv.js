import { useQuery } from "@tanstack/react-query";
import { getAiringTodayTv } from "../../services/tv/getAiringTodayTv";

const useAiringTodayTv = (currentPage) => {
  const { data, isLoading, isError, error, isSuccess } = useQuery({
    queryKey: ["getAiringTodayTv", currentPage],
    queryFn: () => getAiringTodayTv(currentPage),
  });
  return { data, isLoading, isError, error, isSuccess };
};

export default useAiringTodayTv;
