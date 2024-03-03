import React, { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useSearchedMovies from "../hook/useSearchedMovies";
import useSearchedTv from "../hook/tv/useSearchedTv";
import { PopularMoviesContext } from "../store/PopularMoviesContext";
import { PopularTvContext } from "../store/tv/PopularTvContext";

const SearchSuggestion = ({ setSearchSuggestionToggle }) => {
  const { pathname } = useLocation();
  let currentPage = 1;
  const nav = useNavigate();
  const [searchKeywords, setSearchKeywords] = useState("");

  const isMoviesActive = pathname.includes("/movies/");
  const isTVActive = pathname.includes("/tv/");

  let ApiData;
  let PopularApiData;
  if (isMoviesActive) {
    const { data, isError, isLoading, isSuccess, error } = useSearchedMovies(
      currentPage,
      searchKeywords
    );
    const { data: PopularData, isLoading: PopularIsLoading } =
      useContext(PopularMoviesContext);
    ApiData = { data, isError, isLoading, isSuccess, error };
    PopularApiData = { PopularData, PopularIsLoading };
  } else if (isTVActive) {
    const { data, isError, isLoading, isSuccess, error } = useSearchedTv(
      currentPage,
      searchKeywords
    );
    const { data: PopularData, isLoading: PopularIsLoading } =
      useContext(PopularTvContext);
    ApiData = { data, isError, isLoading, isSuccess, error };
    PopularApiData = { PopularData, PopularIsLoading };
    ApiData = { data, isError, isLoading, isSuccess, error };
  }
  const { data, isError, isLoading, isSuccess, error } = ApiData;
  const { PopularData, PopularIsLoading } = PopularApiData;

  const handleChangeOnText = (e) => {
    setSearchKeywords(e.target.value);
  };
  const handleOnClickEachSuggestion = (each) => {
    let slug;
    if (isMoviesActive) {
      slug = each.title.toLowerCase().replace(/ /g, "-");
      nav(`/movies/${slug}`, { state: { movieId: each.id } });
      setSearchSuggestionToggle(false);
    } else if (isTVActive) {
      slug = each.name.toLowerCase().replace(/ /g, "-");
      nav(`/tv/${slug}`, { state: { serieId: each.id } });
      setSearchSuggestionToggle(false);
    }
  };
  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (isMoviesActive) {
      nav(`/movies/search/${searchKeywords}/page/1`, { state: { data } });
      setSearchSuggestionToggle(false);
    } else if (isTVActive) {
      nav(`/tv/search/${searchKeywords}/page/1`, { state: { data } });
      setSearchSuggestionToggle(false);
    }
  };
  console.log(data);
  return (
    <div>
      <div
        className="fixed w-screen h-screen opacity-40 dark:opacity-40 blur bg-black dark:bg-black z-40"
        onClick={() => setSearchSuggestionToggle(false)}
      ></div>
      <div className="absolute top-1/2 left-1/2 px-5 py-5 rounded-lg translate-x-[-50%] translate-y-[-50%]  z-[100] w-[270px] sm:w-[500px] bg-white dark:bg-black dark:shadow-lg dark:shadow-orange-500 shadow-orange-500 shadow">
        <form onSubmit={handleSubmitForm}>
          <div className="flex items-center justify-between mb-3">
            <div className="w-6 p-2"></div>
            {isMoviesActive && (
              <h3 className=" font-semibold text-center text-lg dark:text-gray-200 ">
                Search Movies
              </h3>
            )}
            {isTVActive && (
              <h3 className=" font-semibold text-center text-lg dark:text-gray-200">
                Search Tv Series
              </h3>
            )}
            <button
              onClick={() => setSearchSuggestionToggle(false)}
              className="p-2 hover:bg-gray-200 rounded-full dark:hover:bg-gray-800 dark:text-gray-200"
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
          </div>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-700 dark:border-gray-600 dark:outline-none dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500 focus:outline-orange-500"
              placeholder="Type movie's name"
              autoFocus
              onChange={handleChangeOnText}
              required
            />
            <button
              type="submit"
              className="text-white absolute end-2.5 bottom-2.5 bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
            >
              Search
            </button>
          </div>
        </form>
        {searchKeywords ? (
          <div className=" overflow-y-scroll h-[300px]">
            <h4 className="text-sm px-4 pb-1 pt-3 font-semibold dark:text-gray-200">
              Searched Movie Results
            </h4>
            <ul>
              {data?.results.map((each) => (
                <li
                  key={each.id}
                  className="py-1 px-3 border-b hover:bg-gray-100 active:bg-gray-200 dark:hover:bg-gray-800 dark:text-gray-100"
                  onClick={() => handleOnClickEachSuggestion(each)}
                >
                  <button className="flex items-center text-sm space-x-2 w-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                      />
                    </svg>
                    <span className=" truncate">
                      {each.title ? each.title : each.name}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className=" overflow-y-scroll h-[300px]">
            <h4 className="text-sm px-4 pb-1 pt-3 font-semibold dark:text-gray-200">
              Popular {isMoviesActive ? "Movies" : "Tv Series"}
            </h4>
            <ul>
              {PopularData.results.map((each) => (
                <li
                  key={each.id}
                  className="py-1 px-3 border-b hover:bg-gray-100 active:bg-gray-200 dark:hover:bg-gray-800 dark:text-gray-100"
                  onClick={() => handleOnClickEachSuggestion(each)}
                >
                  <button className="flex items-center text-sm space-x-2 w-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                      />
                    </svg>
                    <span className=" truncate">
                      {each.title ? each.title : each.name}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchSuggestion;
