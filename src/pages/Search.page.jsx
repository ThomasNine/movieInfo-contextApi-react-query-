import React, { useState, useContext } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import useSearchedMovies from "../hook/useSearchedMovies";
import MoviesLoading from "../components/MoviesLoading";
import MoviesCard from "../components/MoviesCard";
import Pagination from "@mui/material/Pagination";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { DarkModeConstext } from "../store/DarkModeContext";
import useSearchedTv from "../hook/tv/useSearchedTv";

const SearchPage = () => {
  const { pathname } = useLocation();
  const { query, page } = useParams();
  const [currentPage, setCurrentPage] = useState(Number(page));
  const isMoviesActive = pathname.includes("/movies");
  const isTVActive = pathname.includes("/tv");
  let ApiData;

  if (isMoviesActive) {
    const { data, isError, isSuccess, isLoading, error } = useSearchedMovies(
      currentPage,
      query
    );
    ApiData = { data, isError, isLoading, isSuccess, error };
  } else if (isTVActive) {
    const { data, isError, isSuccess, isLoading, error } = useSearchedTv(
      currentPage,
      query
    );
    ApiData = { data, isError, isLoading, isSuccess, error };
  }
  const { darkMode } = useContext(DarkModeConstext);
  const nav = useNavigate();

  const { data, isError, isLoading, isSuccess, error } = ApiData;
  const handleGotoDetail = (movie) => {
    if (isMoviesActive) {
      let slug = movie.title.toLowerCase().replace(/ /g, "-");
      nav(`/movies/${slug}`, { state: { movieId: movie.id } });
    } else if (isTVActive) {
      let slug = movie.name.toLowerCase().replace(/ /g, "-");
      nav(`/tv/${slug}`, { state: { serieId: movie.id } });
    }
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "#ea580c",
      },
      mode: darkMode ? "dark" : "light",
    },
  });
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
    if (isMoviesActive) {
      nav(`/movies/search/${query}/page/` + value);
    } else if (isTVActive) {
      nav(`/tv/search/${query}/page/` + value);
    }
  };
  return (
    <>
      {isLoading && <MoviesLoading />}
      {isError && <h1>{error}</h1>}
      {isSuccess && (
        <div className="">
          <div className=" container mx-auto pt-16">
            <div className="flex flex-col sm:flex-row justify-center items-center  text-lg font-medium dark:text-gray-300 my-5 space-x-3">
              <h5>Results of Searching </h5>
              <h5 className=" text-orange-500">{query}</h5>
            </div>
            <div className="flex flex-wrap justify-center gap-x-[10px] sm:gap-x-5 gap-y-7">
              {data?.results.map((movie) => (
                <div onClick={() => handleGotoDetail(movie)} key={movie.id}>
                  <MoviesCard movie={movie} />
                </div>
              ))}
            </div>
            <div className=" flex justify-center py-7">
              <div className=" sm:hidden">
                <ThemeProvider theme={theme}>
                  <Pagination
                    count={data?.total_pages}
                    variant="outlined"
                    color="primary"
                    size="small"
                    page={currentPage}
                    onChange={handlePageChange}
                  />
                </ThemeProvider>
              </div>
              <div className="hidden sm:block">
                <ThemeProvider theme={theme}>
                  <Pagination
                    count={data?.total_pages}
                    variant="outlined"
                    color="primary"
                    size="large"
                    page={currentPage}
                    onChange={handlePageChange}
                  />
                </ThemeProvider>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SearchPage;
