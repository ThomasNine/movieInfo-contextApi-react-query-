import { useQuery } from "@tanstack/react-query";
import { getSearchedMovies } from "../services/movies/getSearchedMovies";
const useSearchedMovies = (currentPage, searchKeywords) => {
  const { data, isSuccess, isError, error, isLoading } = useQuery({
    queryKey: ["getSearchedMovies", currentPage, searchKeywords],
    queryFn: () => getSearchedMovies(currentPage, searchKeywords),
  });
  return { data, isSuccess, isError, error, isLoading };
};

export default useSearchedMovies;
