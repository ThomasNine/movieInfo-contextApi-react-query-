import React, { createContext, useEffect, useState } from "react";

export const DarkModeConstext = createContext();

const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true" ? true : false
  );
  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  useEffect(() => {
    if (darkMode) {
      localStorage.setItem("darkMode", "true");
      window.document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("darkMode", "false");
      window.document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  return (
    <DarkModeConstext.Provider
      value={{ darkMode, setDarkMode, handleDarkMode }}
    >
      {children}
    </DarkModeConstext.Provider>
  );
};

export default DarkModeProvider;
