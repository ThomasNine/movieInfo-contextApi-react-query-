import { useQuery } from "@tanstack/react-query";
import { getMovieTrailer } from "../services/movies/getMovieTrailer";

const useMovieTrailer = (movieId) => {
  const { data, isSuccess, isLoading, isError, error } = useQuery({
    queryKey: ["getMovieTrailer"],
    queryFn: () => getMovieTrailer(movieId),
  });
  return { data, isSuccess, isLoading, isError, error };
};
export default useMovieTrailer;
