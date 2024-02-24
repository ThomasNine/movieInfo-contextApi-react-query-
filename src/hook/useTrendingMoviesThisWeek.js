import { getTrendingThisWeek } from "../services/movies/getTrendingThisWeek";
import { useQuery } from "@tanstack/react-query";

const useTrendingThisWeek = () => {
  const { data, isLoading, isError, error, isSuccess } = useQuery({
    queryKey: ["getTendingThisWeek"],
    queryFn: getTrendingThisWeek,
    staleTime: 60 * 1000 * 60 * 24,
  });
  return { data, isLoading, isError, error, isSuccess };
};

export default useTrendingThisWeek;
