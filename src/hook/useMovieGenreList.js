import { useQuery } from "@tanstack/react-query";
import { getMovieGenreList } from "../services/movies/getMovieGenreList";

const useMovieGenreList = () => {
  const { data, isLoading, isError, error, isSuccess, isPending, isFetching } =
    useQuery({
      queryKey: ["getMovieGenreList"],
      queryFn: () => getMovieGenreList(),
    });
  return { data, isLoading, isError, error, isSuccess, isPending, isFetching };
};

export default useMovieGenreList;
