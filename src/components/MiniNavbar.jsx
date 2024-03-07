import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import MiniNavbarDropdown from "./MiniNavbarDropdown";
import FilterMovies from "./FilterMovies";
import FilterTv from "./FilterTv";

const MiniNavbar = () => {
  const [toggleMiniLink, setToggleMiniLink] = useState(false);
  const [toggleGenre, setToggleGenre] = useState(false);

  let toAttri;
  let navName;
  const { pathname } = useLocation();
  const isNowPlayingActive = pathname.includes("/movies/now-playing");
  const isPopularMoviesActive = pathname.includes("/movies/popular");
  const isTopRatedMoviesActive = pathname.includes("/movies/top-rated");
  const isUpcomingActive = pathname.includes("/movies/upcoming");
  const isAiringTodayActive = pathname.includes("/tv/airing-today");
  const isPopularTvActive = pathname.includes("/tv/popular");
  const isTopRatedTvActive = pathname.includes("/tv/top-rated");
  const isOnTvActive = pathname.includes("/tv/on-the-air");

  let NavLinkArr;
  if (pathname.includes("/movies/")) {
    NavLinkArr = [
      {
        navName: "Now Playing",
        toAttri: "/movies/now-playing/page/1",
        isActive: isNowPlayingActive,
      },
      {
        navName: "Popular",
        toAttri: "/movies/popular/page/1",
        isActive: isPopularMoviesActive,
      },
      {
        navName: "Top-Rated",
        toAttri: "/movies/top-rated/page/1",
        isActive: isTopRatedMoviesActive,
      },
      {
        navName: "Upcoming",
        toAttri: "/movies/upcoming/page/1",
        isActive: isUpcomingActive,
      },
    ];
  } else if (pathname.includes("/tv/")) {
    NavLinkArr = [
      {
        navName: "Airing Today",
        toAttri: "/tv/airing-today/page/1",
        isActive: isAiringTodayActive,
      },
      {
        navName: "Popular",
        toAttri: "/tv/popular/page/1",
        isActive: isPopularTvActive,
      },
      {
        navName: "Top-Rated",
        toAttri: "/tv/top-rated/page/1",
        isActive: isTopRatedTvActive,
      },
      {
        navName: "on TV",
        toAttri: "/tv/on-the-air/page/1",
        isActive: isOnTvActive,
      },
    ];
  }

  if (isNowPlayingActive) {
    toAttri = "/movies/now-playing/page/1";
    navName = "Now Playing";
  } else if (isPopularMoviesActive) {
    toAttri = "/movies/popular/page/1";
    navName = "Popular ";
  } else if (isTopRatedMoviesActive) {
    toAttri = "/movies/top-rated/page/1";
    navName = "Top-Rated ";
  } else if (isUpcomingActive) {
    toAttri = "/movies/upcoming/page/1";
    navName = "Upcoming";
  } else if (isAiringTodayActive) {
    toAttri = "/tv/airing-today/page/1";
    navName = "Airing Today";
  } else if (isPopularTvActive) {
    toAttri = "/tv/popular/page/1";
    navName = "Popular ";
  } else if (isTopRatedTvActive) {
    toAttri = "/tv/top-rated/page/1";
    navName = "Top-Rated ";
  } else if (isOnTvActive) {
    toAttri = "/tv/on-the-air/page/1";
    navName = "On TV";
  }

  return (
    <div className=" container mx-auto flex justify-center pt-24 pb-10 z-40">
      <div className="inline-flex items-center border shadow dark:border-white/30 rounded-full">
        {/* for tablet and laptop */}
        <div className="hidden sm:flex items-center">
          <div className="hidden sm:flex items-center">
            {NavLinkArr.map((each) => (
              <NavLink to={each.toAttri} key={each.navName}>
                <h1
                  className={`mini-nav-link ${
                    each.isActive && "bg-orange-600"
                  }`}
                >
                  {each.navName}
                </h1>
              </NavLink>
            ))}
          </div>
        </div>
        {/* for mobile  */}
        <div className="block sm:hidden">
          <h1
            className="mini-nav-link w-40 flex items-center gap-2 bg-orange-600 rounded-full"
            onClick={() => {
              setToggleMiniLink(!toggleMiniLink);
            }}
          >
            <span className=" mr-auto">{navName}</span>
            <span
              className={` duration-200 transition ${
                toggleMiniLink && " rotate-180"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </span>
          </h1>
          {toggleMiniLink && (
            <MiniNavbarDropdown
              NavLinkArr={NavLinkArr}
              toggleMiniLink={toggleMiniLink}
              setToggleMiniLink={setToggleMiniLink}
            />
          )}
        </div>
        <div className="relative">
          {toggleGenre ? (
            <button
              className="mini-nav-link"
              onClick={() => setToggleGenre(!toggleGenre)}
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
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          ) : (
            <button
              className="mini-nav-link"
              onClick={() => setToggleGenre(!toggleGenre)}
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
                  d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
                />
              </svg>
            </button>
          )}
        </div>
        {toggleGenre &&
          (pathname.includes("/movies/") ? (
            <FilterMovies
              toggleGenre={toggleGenre}
              setToggleGenre={setToggleGenre}
            />
          ) : (
            <FilterTv
              toggleGenre={toggleGenre}
              setToggleGenre={setToggleGenre}
            />
          ))}
      </div>
    </div>
  );
};

export default MiniNavbar;
