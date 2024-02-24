import React, { useContext, useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import RoutePath from "./Routes/RoutePath";
import { GeneralContext } from "./store/GeneralContext";
import SearchSuggestion from "./components/SearchSuggestion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "./store/AuthContext";
import { useNavigate } from "react-router-dom";

const App = () => {
  const nav = useNavigate();
  const { searchSuggestionToggle, setSearchSuggestionToggle } =
    useContext(GeneralContext);

  return (
    <div className=" min-h-screen w-full bg-white dark:bg-black ">
      <Navbar />
      <ToastContainer />
      {searchSuggestionToggle && (
        <SearchSuggestion
          className=" z-50"
          setSearchSuggestionToggle={setSearchSuggestionToggle}
        />
      )}
      <RoutePath />
    </div>
  );
};

export default App;
