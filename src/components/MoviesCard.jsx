import React from "react";

import "react-circular-progressbar/dist/styles.css";
import CircularRating from "./CircularRating";
import DateFormat from "./DateFormat";

const MoviesCard = ({ movie }) => {
  let title;
  if (movie.title) {
    title = movie.title;
  } else if (movie.name) {
    title = movie.name;
  }
  return (
    <div className="relative group w-44 sm:w-52 rounded-lg shadow-lg dark:shadow dark:shadow-gray-300/50 hover:dark:shadow-lg hover:shadow-orange-300/50  hover:dark:shadow-orange-300/50 overflow-hidden ">
      <div className=" relative overflow-hidden">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          className="h-[312px] group-hover:scale-105 duration-300"
          alt=""
        />
      </div>
      <div className="absolute bottom-[72px] left-3 w-10 h-10 bg-black overflow-hidden rounded-full">
        <CircularRating
          vote_average={movie.vote_average}
          maxValue={10}
          text_size={"text-sm"}
        />
      </div>
      <div className="flex flex-col px-3 pt-7 pb-5 space-y-1">
        <h4 className=" text-gray-600 dark:text-white font-semibold truncate">
          {title}
        </h4>
        <h6 className=" text-gray-400 dark:text-gray-400 font-semibold text-xs">
          <DateFormat
            release_date={movie.release_date}
            first_air_date={movie.first_air_date}
          />
        </h6>
      </div>
    </div>
  );
};

export default MoviesCard;
