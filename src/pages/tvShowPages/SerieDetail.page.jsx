import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useTvDetail from "../../hook/tv/useTvDetail";
import useTvTrailers from "../../hook/tv/useTvTrailers";
import VideoListForDetail from "../../components/VideoListForDetail";
import DateFormat from "../../components/DateFormat";
import CircularRating from "../../components/CircularRating";

const SerieDetailPage = () => {
  const {
    state: { serieId },
  } = useLocation();
  const nav = useNavigate();

  const {
    data: detailData,
    isSuccess: detailIsSuccess,
    isLoading: detailIsLoading,
    isError: detailIsError,
    error: detailError,
  } = useTvDetail(serieId);

  const {
    data: trailerData,
    isSuccess: trailerIsSuccess,
    isLoading: trailerIsLoading,
    isError: trailerIsError,
    error: trailerError,
  } = useTvTrailers(serieId);

  if (detailIsLoading || trailerIsLoading) {
    return <h1>Loading...</h1>;
  }

  if (detailIsError || trailerIsError) {
    return <h1>Error: {error.message}</h1>;
  }

  return (
    <>
      <div className="pb-20">
        <div className="relative w-screen md:h-[700px] overflow-hidden text-gray-200">
          <img
            src={`https://image.tmdb.org/t/p/original${detailData.backdrop_path}`}
            className=" brightness-[.5] h-screen w-full object-cover"
            alt={detailData.original_title}
          />

          <div className=" container absolute top-[52%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-3 sm:px-10 py-10 backdrop-blur-sm bg-white/30 dark:bg-black/30 rounded-xl shadow">
            <div className=" flex flex-col justify-center md:flex-row space-x-0 md:space-x-10 space-y-10 md:space-y-0 items-center">
              <img
                src={`https://image.tmdb.org/t/p/w500${detailData.poster_path}`}
                className=" max-h-[400px] rounded-md"
                alt=""
              />
              <div className="flex flex-col items-center md:items-start">
                <div className="flex items-center space-x-2 sm:space-x-3 mb-5">
                  <div className=" w-10 sm:w-14 h-10 sm:h-14">
                    <CircularRating
                      vote_average={detailData.vote_average}
                      maxValue={10}
                      text_size={"text-sm sm:text-base"}
                    />
                  </div>
                  <h2 className="text-xl sm:text-3xl font-bold">
                    {detailData.title}
                  </h2>
                </div>
                <div className=" flex items-center flex-wrap justify-center">
                  {detailData.genres.map((i, index) => (
                    <span
                      key={i.id}
                      className="space-x-1 mr-1
                    "
                    >
                      <span>{i.name}</span>
                      <span>
                        {index === detailData.genres.length - 1 ? "" : "|"}
                      </span>
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap space-x-2 mb-3">
                  <div className="">
                    <DateFormat first_air_date={detailData.first_air_date} />
                  </div>
                </div>
                <p className=" mb-5 text-center md:text-left">
                  {detailData.overview}
                </p>

                <div className="flex flex-col sm:flex-row gap-1">
                  <Link to={detailData.homepage} target="blank">
                    <button className="primary-btn">Netflix</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto overflow-hidden">
          <h4 className=" text-xl font-semibold mt-3 mb-2 dark:text-gray-300">
            Videos
          </h4>
          {trailerData.results.length > 0 ? (
            <VideoListForDetail trailerData={trailerData} />
          ) : (
            <h4>No Video provided</h4>
          )}
        </div>
        <div className=" flex items-center justify-center my-5">
          <Link to={-1} className="">
            <button className=" primary-btn">
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
                  d="M15.75 19.5 8.25 12l7.5-7.5"
                />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default SerieDetailPage;
