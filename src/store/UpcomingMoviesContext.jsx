import { createContext, useState } from "react";
import useUpcomingMovies from "../hook/useUpcomingMovies";

export const UpcomingMoviesContext = createContext();

const UpcomingMoviesContextProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const { data, isSuccess, error, isError, isLoading } =
    useUpcomingMovies(currentPage);
  return (
    <UpcomingMoviesContext.Provider
      value={{
        data,
        isSuccess,
        error,
        isError,
        isLoading,
        currentPage,
        setCurrentPage,
      }}
    >
      {children}
    </UpcomingMoviesContext.Provider>
  );
};

export default UpcomingMoviesContextProvider;
