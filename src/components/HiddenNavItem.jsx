import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const HiddenNavItem = ({ toggle, setToggle, isMoviesActive, isTVActive }) => {
  const nav = useNavigate();
  const handleGoToMovieFn = () => {
    setToggle(!toggle);
    nav("/movies/now-playing/page/1");
  };
  const handleGoToTvFn = () => {
    setToggle(!toggle);
    nav("/tv/airing-today/page/1");
  };
  return (
    <ul
      className={`fixed -top-full z-40 ${
        toggle && "translate-y-full"
      } h-screen duration-200
      flex bg-slate-950 text-white sm:hidden flex-col items-center justify-center space-y-3 w-full`}
    >
      <li
        className={`nav-item ${isMoviesActive && "text-orange-500"}`}
        onClick={handleGoToMovieFn}
      >
        Movies
      </li>

      <li
        className={`nav-item ${isTVActive && "text-orange-500"}`}
        onClick={handleGoToTvFn}
      >
        TV Shows
      </li>
    </ul>
  );
};

export default HiddenNavItem;
