import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "animate.css/animate.min.css";
import HiddenNavItem from "./HiddenNavItem";
import DarkMode from "./DarkMode";
import { DarkModeConstext } from "../store/DarkModeContext";
import { useLocation, useNavigate } from "react-router-dom";
import { GeneralContext } from "../store/GeneralContext";
import { AuthContext } from "../store/AuthContext";
import Login from "./Login";
import Account from "./Account";
import Model from "./Model";

const Navbar = () => {
  const { user, logoutFn } = useContext(AuthContext);
  const [toggle, setToggle] = useState(false);
  const { darkMode, setDarkMode } = useContext(DarkModeConstext);
  const { setSearchSuggestionToggle } = useContext(GeneralContext);
  const { pathname } = useLocation();
  const isMoviesActive = pathname.includes("/movies");
  const isTVActive = pathname.includes("/tv");

  const handleHiddenNavItem = () => {
    setToggle(!toggle);
  };
  const handleSearch = () => {
    setSearchSuggestionToggle(true);
  };

  return (
    <div>
      <main className=" bg-black text-gray-400 w-full px-3 sm:px-0 fixed top-0 z-50 opacity-90">
        <nav className="container overflow-hidden mx-auto flex justify-between items-center h-14">
          {/* logo & menu */}
          <div className="flex items-center space-x-1">
            <button
              onClick={handleHiddenNavItem}
              className="transition duration-200 active:scale-110 transform sm:hidden z-50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d={`${
                    toggle
                      ? "M6 18 18 6M6 6l12 12"
                      : "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  }`}
                />
              </svg>
            </button>
            <NavLink to={"/"}>
              <h2 className=" text-2xl bg-clip-text text-transparent bg-gradient-to-r from-[#f12711] to-[#f5af19] font-Logo">
                Movie INFO+
              </h2>
            </NavLink>
          </div>

          <ul className="hidden sm:flex items-center space-x-1">
            <NavLink to={"/movies/now-playing/page/1"}>
              <li className={`nav-item ${isMoviesActive && "text-orange-500"}`}>
                Movies
              </li>
            </NavLink>
            <NavLink to={"/tv/airing-today/page/1"}>
              <li className={`nav-item ${isTVActive && "text-orange-500"}`}>
                TV Shows
              </li>
            </NavLink>
          </ul>
          <ul className="flex items-center space-x-1">
            {(isMoviesActive || isTVActive) && (
              <li className=" nav-item-icon " onClick={handleSearch}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              </li>
            )}

            <li className="nav-item-icon">
              <DarkMode darkMode={darkMode} setDarkMode={setDarkMode} />
            </li>
            {user ? <Account /> : <Login />}
          </ul>
        </nav>
      </main>
      <HiddenNavItem
        toggle={toggle}
        setToggle={setToggle}
        isMoviesActive={isMoviesActive}
        isTVActive={isTVActive}
      />
    </div>
  );
};

export default Navbar;
