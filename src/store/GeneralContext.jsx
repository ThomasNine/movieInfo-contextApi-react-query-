import React, { createContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const GeneralContext = createContext();

const GeneralContextProvider = ({ children }) => {
  const [searchSuggestionToggle, setSearchSuggestionToggle] = useState(false);
  const notify = (message) => toast(message);
  return (
    <GeneralContext.Provider
      value={{
        searchSuggestionToggle,
        setSearchSuggestionToggle,
        notify,
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
};

export default GeneralContextProvider;
