import React, { createContext, useState } from "react";
import useOnTheAir from "../../hook/tv/useOnTheAir";
export const OnTheAirTvContext = createContext();
const OnTheAirTvContextProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isSuccess, isLoading, isError, error } =
    useOnTheAir(currentPage);
  return (
    <OnTheAirTvContext.Provider
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
    </OnTheAirTvContext.Provider>
  );
};

export default OnTheAirTvContextProvider;
