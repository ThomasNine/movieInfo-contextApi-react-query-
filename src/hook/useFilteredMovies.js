import { useQuery } from "@tanstack/react-query";
import { getFilteredMovies } from "../services/movies/getFilteredMovies";
const useFilteredMovied = (currentPage, genre, release_yr) => {
  const { data, isLoading, isError, error, isSuccess, isPending, isFetching } =
    useQuery({
      queryKey: ["getFilteredMovies", currentPage, genre, release_yr],
      queryFn: () => getFilteredMovies(currentPage, genre, release_yr),
    });
  return { data, isLoading, isError, error, isSuccess, isPending, isFetching };
};

export default useFilteredMovied;
