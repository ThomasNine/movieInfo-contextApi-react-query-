import React, { useContext, useEffect } from "react";
import { PopularMoviesContext } from "../../store/PopularMoviesContext";
import { TopRatedMoviesContext } from "../../store/TopRatedMoviesContext";
import { UpcomingMoviesContext } from "../../store/UpcomingMoviesContext";
import { PopularTvContext } from "../../store/tv/PopularTvContext";
import { OnTheAirTvContext } from "../../store/tv/OnTheAirTvContext";
import { TopRatedTvContext } from "../../store/tv/TopRatedTvContext";
import MoviesCard from "../MoviesCard";
import { Link, useNavigate } from "react-router-dom";
import Aos from "aos";

const HomePageMiniCarousel = ({ context, page, animate }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const nav = useNavigate();
  const { data, isSuccess, isLoading, isError, error } = useContext(context);
  const handleGotoDetail = (movie) => {
    if (page === "movie") {
      let slug = movie.title.toLowerCase().replace(/ /g, "-");
      nav(`/movies/${slug}`, { state: { movieId: movie.id } });
    } else if (page === "tv") {
      let slug = movie.name.toLowerCase().replace(/ /g, "-");
      nav(`/tv/${slug}`, { state: { serieId: movie.id } });
    }
  };
  if (isLoading) {
    return <h4>Loading</h4>;
  } else if (isError) {
    return <h4>error</h4>;
  } else if (isSuccess) {
    return (
      <div className="mx-5 sm:mx-0 space-y-5" data-aos={animate}>
        <Link to={"/tv/on-the-air/page/1"}>
          <h5 className=" text-lg dark:text-gray-300 font-semibold">
            On-The-Air Tv Shows
          </h5>
        </Link>
        <div className="flex gap-x-[10px] sm:gap-x-5 gap-y-7 overflow-x-scroll">
          {data?.results.map((movie) => (
            <div
              onClick={() => handleGotoDetail(movie)}
              key={movie.id}
              className="my-3"
            >
              <MoviesCard movie={movie} />
            </div>
          ))}
        </div>
      </div>
    );
  }
};

export default HomePageMiniCarousel;
