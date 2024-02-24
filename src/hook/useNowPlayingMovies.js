import { useQuery } from "@tanstack/react-query";
import { getNowPlayingMovies } from "../services/movies/getNowPlayingMovies";

const useNowPlayingMovies = (currentPage) => {
  const { data, isLoading, isError, error, isSuccess, isPending, isFetching } =
    useQuery({
      queryKey: ["getNowPlayingMovies", currentPage],
      queryFn: () => getNowPlayingMovies(currentPage),
      staleTime: 60 * 1000 * 60 * 24,
    });
  return { data, isLoading, isError, error, isSuccess, isPending, isFetching };
};

export default useNowPlayingMovies;
