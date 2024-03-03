import React, { useState } from "react";
import useMovieGenreList from "../hook/useMovieGenreList";
import { useNavigate } from "react-router-dom";
import useTvGenreList from "../hook/tv/useTvGenreList";

const FilterTv = ({ toggleGenre, setToggleGenre }) => {
  const { data, isSuccess, isError, isLoading } = useTvGenreList();
  const nav = useNavigate();
  const [selectedGenre, setSelectedGenre] = useState([]);
  const [releaseYr, setReleaseYr] = useState("");

  const handleSelectGenre = (id, name) => {
    if (selectedGenre.find((each) => each.id === id)) {
      const removedSelectInArray = selectedGenre.filter(
        (each) => each.id !== id
      );
      setSelectedGenre(removedSelectInArray);
    } else {
      setSelectedGenre([...selectedGenre, { id, name }]);
    }
  };

  const handleReleaseYr = (e) => {
    setReleaseYr(e.target.value);
  };

  const handleFilter = () => {
    let selectedGenreUrl;
    if (selectedGenre.length > 0 && releaseYr !== "") {
      selectedGenreUrl =
        selectedGenre.map((each) => each.name.toLowerCase()).join("&") +
        "&year=" +
        releaseYr.toString();
    } else if (selectedGenre.length > 0) {
      selectedGenreUrl = selectedGenre
        .map((each) => each.name.toLowerCase())

        .join("&");
    } else if (releaseYr) {
      selectedGenreUrl = "year=" + releaseYr.toString();
    }
    console.log(selectedGenreUrl);
    nav(`/tv/${selectedGenreUrl}/page/1`, {
      state: { selectedGenre, releaseYr },
    });
  };
  console.log(data);
  if (isLoading) {
    return <div>loading</div>;
  } else if (isError) {
    return <div>error</div>;
  } else if (isSuccess) {
    return (
      <>
        <div
          className="fixed top-0 right-0 bg-black  w-screen h-screen dark:bg-white opacity-10 z-30"
          onClick={() => {
            setToggleGenre(!toggleGenre);
          }}
        ></div>
        <div className="absolute top-[55%] sm:top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-[280px] sm:w-[500px] py-3 px-5 shadow border dark:border-gray-700 bg-gray-100 dark:bg-gray-950 rounded-xl z-40">
          <div className="flex items-center justify-between my-3">
            <div className="w-6 p-2"></div>
            <h4 className=" font-semibold text-center text-xl dark:text-gray-200">
              Filter Tv Series
            </h4>
            <button
              onClick={() => setToggleGenre(!toggleGenre)}
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
          <div className="mb-3">
            <h5 className=" font-medium ml-1 mb-2 dark:text-gray-300">
              Genres
            </h5>
            <div className="flex flex-wrap">
              {data.genres.map((i) => (
                <button
                  key={i.id}
                  onClick={() => handleSelectGenre(i.id, i.name)}
                >
                  <h6
                    className={`dark:bg-gray-600 ${
                      selectedGenre.find((each) => each.id === i.id) &&
                      "bg-orange-500 text-white dark:bg-orange-500"
                    } border-2 px-3 py-1 font-medium border-orange-600  bg-gray-100 mr-1 hover:bg-orange-600 hover:text-white rounded-full text-sm mb-2`}
                  >
                    {i.name}
                  </h6>
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col space-y-3">
            <label className=" font-medium ml-1 dark:text-gray-300">
              Release Year
            </label>
            <input
              type="number"
              value={releaseYr}
              placeholder="type 4 digits 2020,2021,etc"
              className=" w-full rounded-full px-3 py-2 text-sm outline-none border-2 border-gray-300 outline-offset-0 focus:border-orange-500 focus:ring-orange-500"
              onChange={(e) => handleReleaseYr(e)}
            />
          </div>
          <button
            className={`primary-btn w-full rounded-full mt-5 mb-10 ${
              selectedGenre.length === 0 && releaseYr === ""
                ? "bg-orange-400 hover:bg-orange-400"
                : ""
            }`}
            onClick={handleFilter}
            disabled={selectedGenre.length === 0 && releaseYr === ""}
          >
            Search
          </button>
        </div>
      </>
    );
  }
};

export default FilterTv;
