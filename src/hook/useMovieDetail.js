import { useQuery } from "@tanstack/react-query";
import { getMovieDetail } from "../services/movies/getMovieDetail";

const useMovieDetail = (movieId) => {
  const { data, isLoading, isSuccess, isError, error } = useQuery({
    queryKey: ["getMovieDetail"],
    queryFn: () => getMovieDetail(movieId),
  });
  return { data, isSuccess, isLoading, isError, error };
};

export default useMovieDetail;
