import React, { createContext, useState } from "react";
import usePopularTv from "../../hook/tv/usePopularTv";

export const PopularTvContext = createContext();

const PopularTvProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isSuccess, isError, isLoading, error } =
    usePopularTv(currentPage);

  return (
    <PopularTvContext.Provider
      value={{
        data,
        isSuccess,
        isError,
        isLoading,
        error,
        currentPage,
        setCurrentPage,
      }}
    >
      {children}
    </PopularTvContext.Provider>
  );
};

export default PopularTvProvider;
