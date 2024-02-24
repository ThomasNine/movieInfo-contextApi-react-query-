import React, { useContext, useEffect } from "react";
import MiniNavbar from "../../components/MiniNavbar";
import MoviesCard from "../../components/MoviesCard";
import { TopRatedMoviesContext } from "../../store/TopRatedMoviesContext";
import MoviesLoading from "../../components/MoviesLoading";
import PaginationOutlined from "../../components/PaginationOutlined";
import { useParams, useNavigate } from "react-router-dom";

const TopRatedMovies = () => {
  const { data, isSuccess, isLoading, isError, error, setCurrentPage } =
    useContext(TopRatedMoviesContext);
  let { page: pageFromParams } = useParams();
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
        <div className=" container mx-auto">
          <MiniNavbar />
          <div className="flex flex-wrap justify-center gap-x-[10px] sm:gap-x-5 gap-y-7">
            {data.results.map((movie) => (
              <div onClick={() => handleGotoDetail(movie)} key={movie.id}>
                <MoviesCard movie={movie} />
              </div>
            ))}
          </div>
          <div className=" flex justify-center py-7">
            <PaginationOutlined
              url={"/movies/top-rated/page/"}
              context={TopRatedMoviesContext}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default TopRatedMovies;
