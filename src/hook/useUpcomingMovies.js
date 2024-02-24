import { useQuery } from "@tanstack/react-query";
import { getUpcomingMovies } from "../services/movies/getUpcomingMovies";

const useUpcomingMovies = (currentPage) => {
  const { data, isLoading, isError, error, isSuccess } = useQuery({
    queryKey: ["getUpcomingMovies", currentPage],
    queryFn: () => getUpcomingMovies(currentPage),
    staleTime: 60 * 1000 * 60 * 24,
  });
  return { data, isLoading, isError, error, isSuccess };
};

export default useUpcomingMovies;
