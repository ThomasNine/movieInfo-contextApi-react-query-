import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import MoviesLoading from "../../components/MoviesLoading";
import MoviesCard from "../../components/MoviesCard";
import PaginationOutlined from "../../components/PaginationOutlined";
import MiniNavbar from "../../components/MiniNavbar";
import { PopularTvContext } from "../../store/tv/PopularTvContext";

const PopularTvShowsPage = () => {
  const {
    data,
    isSuccess,
    isError,
    isLoading,
    error,
    currentPage,
    setCurrentPage,
  } = useContext(PopularTvContext);
  const { page: pageFromParams } = useParams();
  const nav = useNavigate();
  useEffect(() => {
    setCurrentPage(Number(pageFromParams));
  }, [currentPage]);
  const handleGotoDetail = (movie) => {
    let slug = movie.original_name.toLowerCase().replace(/ /g, "-");
    nav(`/tv/${slug}`, { state: { serieId: movie.id } });
  };
  return (
    <>
      {isLoading && <MoviesLoading />}
      {isError && <h1>{error}</h1>}
      {isSuccess && (
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
              url={"/tv/popular/page/"}
              context={PopularTvContext}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default PopularTvShowsPage;
