import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useNavigate } from "react-router-dom";

import React from "react";

const CarouselHomePage = ({ slides, page }) => {
  const nav = useNavigate();
  const handleGotoDetail = (movie) => {
    if (page === "movie") {
      let slug = movie.title.toLowerCase().replace(/ /g, "-");
      nav(`/movies/${slug}`, { state: { movieId: movie.id } });
    } else if (page === "tv") {
      let slug = movie.name.toLowerCase().replace(/ /g, "-");
      nav(`/tv/${slug}`, { state: { serieId: movie.id } });
    }
  };
  return (
    <div className="">
      <Splide
        options={{
          rewind: true,
          loop: true,
          autoplay: true,
          interval: 2000,
          pagination: false,
        }}
        aria-label="React Splide Example"
      >
        {slides.results.map((slide) => (
          <SplideSlide key={slide.id} onClick={() => handleGotoDetail(slide)}>
            <div className="relative w-screen max-h-screen">
              <img
                className=" brightness-[.85] h-[800px] sm:h-full object-cover w-full"
                src={`https://image.tmdb.org/t/p/original${slide.backdrop_path}`}
                alt={slide.title}
              />
              <div className="absolute top-2/3 sm:top-[60%] lg:top-[65%] sm:left-[5%] space-y-5 sm:space-y-2 lg:space-y-4 2xl:space-y-7 w-full flex sm:block flex-col items-center justify-center">
                <h3 className=" text-2xl sm:text-2xl lg:text-3xl xl:text-5xl text-white font-bold px-3 sm:px-0">
                  {slide.title ? slide.title : slide.original_name}
                </h3>

                <p className="text-white hidden lg:block text-base sm:text-sm lg:text-base xl:text-lg w-[80%] sm:w-[60%] lg:w-[50%]">
                  {slide.overview.length > 200
                    ? slide.overview.slice(0, 200) + " ..."
                    : slide.overview}
                </p>
                <p className="text-white block lg:hidden text-base sm:text-sm lg:text-base xl:text-lg w-[80%] sm:w-[60%] lg:w-[40%]">
                  {slide.overview.length > 100
                    ? slide.overview.slice(0, 100) + " ..."
                    : slide.overview}
                </p>
                <button type="button" className="primary-btn">
                  Go to Show
                </button>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default CarouselHomePage;
