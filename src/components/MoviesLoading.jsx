import React from "react";
import MiniNavbar from "./MiniNavbar";

const MoviesLoading = () => {
  const array = Array.from({ length: 20 }, (_, index) => index + 1);
  return (
    <div className=" container mx-auto">
      <MiniNavbar />
      <div className="flex flex-wrap justify-center gap-x-3 gap-y-5 ">
        {array.map((i) => (
          <div
            className="w-52 animate-pulse overflow-hidden shadow-md rounded"
            key={i}
          >
            <div className=" h-72  mb-3 bg-gray-200 dark:bg-gray-700 w-full"></div>
            <div className=" h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-40 mb-4 ml-3"></div>
            <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2.5 ml-3"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoviesLoading;
