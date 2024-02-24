import React, { createContext, useState } from "react";
import useNowPlayingMovies from "../hook/useNowPlayingMovies";

export const NowPlayingMoviesContext = createContext();
const NowPlayingMoviesProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const { data, isSuccess, isLoading, isError, error, isPending, isFetching } =
    useNowPlayingMovies(currentPage);

  return (
    <NowPlayingMoviesContext.Provider
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
    </NowPlayingMoviesContext.Provider>
  );
};

export default NowPlayingMoviesProvider;
