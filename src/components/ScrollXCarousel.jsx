import React from "react";
import MoviesCard from "./MoviesCard";

const ScrollXCarousel = ({ data }) => {
  return (
    <div className="flex gap-x-[10px] sm:gap-x-5 gap-y-7 overflow-x-scroll">
      {data?.results.map((movie) => (
        <div onClick={() => handleGotoDetail(movie)} key={movie.id}>
          <MoviesCard movie={movie} />
        </div>
      ))}
    </div>
  );
};

export default ScrollXCarousel;
