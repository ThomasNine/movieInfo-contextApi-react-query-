import { useQuery } from "@tanstack/react-query";
import { getSearchedTv } from "../../services/tv/getSearchedTv";
const useSearchedTv = (currentPage, searchKeywords) => {
  const { data, isSuccess, isError, error, isLoading } = useQuery({
    queryKey: ["getSearchedTv", currentPage, searchKeywords],
    queryFn: () => getSearchedTv(currentPage, searchKeywords),
  });
  return { data, isSuccess, isError, error, isLoading };
};

export default useSearchedTv;
