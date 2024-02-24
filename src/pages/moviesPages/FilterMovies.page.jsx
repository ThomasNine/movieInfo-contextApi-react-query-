import React, { useState } from "react";
import { useLocation, useParams, useNavigate, Link } from "react-router-dom";
import useMovieByGenre from "../../hook/useFilteredMovies";
import MoviesCard from "../../components/MoviesCard";
import PaginationNoContext from "../../components/PaginationNoContext";
import MoviesLoading from "../../components/MoviesLoading";

const FilterMovies = () => {
  const nav = useNavigate();
  const { page, filterMovies } = useParams();

  const [currentPage, setCurrentPage] = useState(Number(page));
  const {
    state: { selectedGenre, releaseYr },
  } = useLocation();
  console.log(selectedGenre, releaseYr);

  // let genreIdStr = genreId.toString();
  let genreIdStr = selectedGenre.map((each) => each.id).join(",");

  const { data, isLoading, isError, error, isSuccess } = useMovieByGenre(
    currentPage,
    genreIdStr,
    releaseYr
  );

  const handleGotoDetail = (movie) => {
    let slug = movie.title.toLowerCase().replace(/ /g, "-");
    console.log(slug);
    nav(`/movies/${slug}`, { state: { movieId: movie.id } });
  };

  if (isLoading) {
    return <MoviesLoading />;
  } else if (isError) {
    return <h3>error</h3>;
  } else if (isSuccess) {
    return (
      <div className="container mx-auto pt-20 pb-3">
        <div className="flex flex-col sm:flex-row justify-around items-center  text-lg font-medium dark:text-gray-300">
          <div className="flex space-x-3 items-center">
            <h5>Genres : </h5>
            <div className=" space-x-1">
              {selectedGenre?.map((each) => (
                <span className="bg-orange-600 text-white text-sm py-[1px] px-1 rounded-full">
                  {each.name}
                </span>
              ))}
            </div>
          </div>
          <div className="flex space-x-3 items-center">
            <h5>Release Year : </h5>
            {releaseYr && (
              <span className="bg-orange-600 text-white text-sm py-[1px] px-1 rounded-full">
                {releaseYr}
              </span>
            )}
          </div>
        </div>
        <div className="my-10 flex flex-wrap items-center justify-center gap-x-[10px] sm:gap-x-5 gap-y-7">
          {data?.results.map((movie) => (
            <div key={movie.id} onClick={() => handleGotoDetail(movie)}>
              <MoviesCard movie={movie} />
            </div>
          ))}
        </div>
        <div className=" flex justify-center py-7">
          <PaginationNoContext
            url={`/movies/${filterMovies}/page/`}
            data={data}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            selectedGenre={selectedGenre}
            releaseYr={releaseYr}
          />
        </div>
      </div>
    );
  }
};

export default FilterMovies;
