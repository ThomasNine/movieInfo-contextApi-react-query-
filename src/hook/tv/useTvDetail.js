import { useQuery } from "@tanstack/react-query";
import { getTvDetail } from "../../services/tv/getTvDetail";
const useTvDetail = (serieId) => {
  const { data, isLoading, isSuccess, isError, error } = useQuery({
    queryKey: ["getTvDetail"],
    queryFn: () => getTvDetail(serieId),
  });
  return { data, isLoading, isSuccess, isError, error };
};
export default useTvDetail;
