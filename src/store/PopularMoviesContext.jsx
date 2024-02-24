import React, { createContext, useState } from "react";
import usePopularMovies from "../hook/usePopularMovies";

export const PopularMoviesContext = createContext();
const PopularMoviesContextProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isSuccess, isLoading, isError, error, isPending, isFetching } =
    usePopularMovies(currentPage);
  return (
    <PopularMoviesContext.Provider
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
    </PopularMoviesContext.Provider>
  );
};

export default PopularMoviesContextProvider;
