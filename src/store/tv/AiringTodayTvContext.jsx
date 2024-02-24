import React, { createContext, useState } from "react";
import useAiringTodayTv from "../../hook/tv/useAiringTodayTv";

export const AiringTodayTvContext = createContext();
const AiringTodayTvProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const { data, isSuccess, isError, isLoading, error } =
    useAiringTodayTv(currentPage);

  return (
    <AiringTodayTvContext.Provider
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
    </AiringTodayTvContext.Provider>
  );
};

export default AiringTodayTvProvider;
