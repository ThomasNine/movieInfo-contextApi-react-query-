import { useQuery } from "@tanstack/react-query";
import { getOnTheAir } from "../../services/tv/getOnTheAir";

const useOnTheAir = (currentPage) => {
  const { data, isLoading, isError, error, isSuccess } = useQuery({
    queryKey: ["getOnTheAir", currentPage],
    queryFn: () => getOnTheAir(currentPage),
  });
  return { data, isLoading, isError, error, isSuccess };
};

export default useOnTheAir;
