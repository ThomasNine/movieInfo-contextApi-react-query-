import { useQuery } from "@tanstack/react-query";
import { getFilteredTv } from "../../services/tv/getFilteredTv";

const useFilteredTv = (currentPage, genre, release_yr) => {
  const { data, isLoading, isError, error, isSuccess } = useQuery({
    queryKey: ["getFilteredTv", currentPage, genre, release_yr],
    queryFn: () => getFilteredTv(currentPage, genre, release_yr),
  });
  return { data, isLoading, isError, error, isSuccess };
};

export default useFilteredTv;
