import { useQuery } from "@tanstack/react-query";
import { getTvGenreList } from "../../services/tv/getTvGenreList";

const useTvGenreList = () => {
  const { data, isSuccess, isError, error, isLoading } = useQuery({
    queryKey: ["getTvGenreList"],
    queryFn: getTvGenreList,
  });
  return { data, isSuccess, isError, error, isLoading };
};

export default useTvGenreList;
