import { useQuery } from "@tanstack/react-query";
import { getTvTrailers } from "../../services/tv/getTvTrailers";

const useTvTrailers = (TvId) => {
  const { data, isSuccess, isError, error, isLoading } = useQuery({
    queryKey: ["getMovieTrailer"],
    queryFn: () => getTvTrailers(TvId),
  });
  return { data, isSuccess, isError, error, isLoading };
};

export default useTvTrailers;
