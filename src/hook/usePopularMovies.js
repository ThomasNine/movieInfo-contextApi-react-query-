import { useQuery } from "@tanstack/react-query";
import { getPopularMovies } from "../services/movies/getPopularMovies";

const usePopularMovies = (currentPage) => {
  const { data, isLoading, isError, error, isSuccess, isPending, isFetching } =
    useQuery({
      queryKey: ["getPopularMovies", currentPage],
      queryFn: () => getPopularMovies(currentPage),
      staleTime: 60 * 1000 * 60 * 24,
    });
  return { data, isLoading, isError, error, isSuccess, isPending, isFetching };
};

export default usePopularMovies;
