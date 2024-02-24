import React, { useContext, useEffect, useState } from "react";
import { NowPlayingMoviesContext } from "../../store/NowPlayingMoviesContext";
import MiniNavbar from "../../components/MiniNavbar";
import MoviesCard from "../../components/MoviesCard";
import MoviesLoading from "../../components/MoviesLoading";
import PaginationOutlined from "../../components/PaginationOutlined";
import { useParams, useNavigate } from "react-router-dom";
import { GeneralContext } from "../../store/GeneralContext";
import SearchSuggestion from "../../components/SearchSuggestion";

const NowPlayingMoviesPage = () => {
  const { data, isSuccess, isLoading, isError, error, setCurrentPage } =
    useContext(NowPlayingMoviesContext);
  const { searchSuggestionToggle, setSearchSuggestionToggle } =
    useContext(GeneralContext);
  const { page: pageFromParams } = useParams();

  const nav = useNavigate();

  useEffect(() => {
    setCurrentPage(Number(pageFromParams));
  }, [pageFromParams, setCurrentPage]);

  const handleGotoDetail = (movie) => {
    let slug = movie.title.toLowerCase().replace(/ /g, "-");
    nav(`/movies/${slug}`, { state: { movieId: movie.id } });
  };
  return (
    <>
      {isLoading && <MoviesLoading />}
      {isError && <h1>{error}</h1>}
      {isSuccess && (
        <div className="">
          <div className=" container mx-auto">
            <MiniNavbar />
            <div className="flex flex-wrap justify-center gap-x-[10px] sm:gap-x-5 gap-y-7">
              {data?.results.map((movie) => (
                <div onClick={() => handleGotoDetail(movie)} key={movie.id}>
                  <MoviesCard movie={movie} />
                </div>
              ))}
            </div>
            <div className=" flex justify-center py-7">
              <PaginationOutlined
                url={"/movies/now-playing/page/"}
                context={NowPlayingMoviesContext}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NowPlayingMoviesPage;
