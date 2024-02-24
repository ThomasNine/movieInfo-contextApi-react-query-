import React, { createContext, useState } from "react";
import useTopRatedTv from "../../hook/tv/useTopRatedTv";

export const TopRatedTvContext = createContext();
const TopRatedTvProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isSuccess, isLoading, isError, error } =
    useTopRatedTv(currentPage);

  return (
    <TopRatedTvContext.Provider
      value={{
        data,
        isSuccess,
        isLoading,
        isError,
        error,
        currentPage,
        setCurrentPage,
      }}
    >
      {children}
    </TopRatedTvContext.Provider>
  );
};

export default TopRatedTvProvider;
