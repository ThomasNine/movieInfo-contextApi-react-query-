import React, { createContext, useState } from "react";
import useTopRatedMovies from "../hook/useTopRatedMovies";

export const TopRatedMoviesContext = createContext();
const TopRatedMoviesContextProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const { data, isSuccess, isLoading, isError, error, isPending, isFetching } =
    useTopRatedMovies(currentPage);
  return (
    <TopRatedMoviesContext.Provider
      value={{
        data,
        isSuccess,
        isLoading,
        isError,
        error,
        isPending,
        isFetching,
        currentPage,
        setCurrentPage,
      }}
    >
      {children}
    </TopRatedMoviesContext.Provider>
  );
};

export default TopRatedMoviesContextProvider;
