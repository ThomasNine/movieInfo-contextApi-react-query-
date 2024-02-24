import { useQuery } from "@tanstack/react-query";
import { getTopRatedMovies } from "../services/movies/getTopRatedMovies";

const useTopRatedMovies = (currentPage) => {
  const { data, isLoading, isError, error, isSuccess, isPending, isFetching } =
    useQuery({
      queryKey: ["getTopRatedMovies", currentPage],
      queryFn: () => getTopRatedMovies(currentPage),
      staleTime: 60 * 1000 * 60 * 24,
    });
  return { data, isLoading, isError, error, isSuccess, isPending, isFetching };
};

export default useTopRatedMovies;
