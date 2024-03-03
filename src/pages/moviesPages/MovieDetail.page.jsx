import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useMovieDetail from "../../hook/useMovieDetail";
import useMovieTrailer from "../../hook/useMovieTrailer";
import CircularRating from "../../components/CircularRating";
import DateFormat from "../../components/DateFormat";
import VideoListForDetail from "../../components/VideoListForDetail";
import { AuthContext } from "../../store/AuthContext";
import { toast } from "react-toastify";
import { RiNetflixFill } from "react-icons/ri";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";

const MovieDetailPage = () => {
  const {
    state: { movieId },
  } = useLocation();

  const {
    data: detailData,
    isSuccess: detailIsSuccess,
    isLoading: detailIsLoading,
    isError: detailIsError,
    error: detailError,
  } = useMovieDetail(movieId);

  const {
    data: trailerData,
    isSuccess: trailerIsSuccess,
    isLoading: trailerIsLoading,
    isError: trailerIsError,
    error: trailerError,
  } = useMovieTrailer(movieId);
  const { user } = useContext(AuthContext);

  const handleFavMovies = async () => {
    if (user) {
      await updateDoc(doc(db, "users", user?.email), {
        favoriteMovies: arrayUnion(detailData),
      });
      toast("Added to Favorite Movies");
    } else {
      toast("Please Login to add this movie to your favorite list");
    }
  };
  if (detailIsLoading || trailerIsLoading) {
    return <h1>Loading...</h1>;
  }

  if (detailIsError || trailerIsError) {
    return <h1>Error: {error.message}</h1>;
  }

  // for runtime
  if (detailIsSuccess && trailerIsSuccess) {
    let runtimeHr = Math.floor(detailData.runtime / 60);
    const runtimeMin = detailData.runtime % 60;

    return (
      <>
        <div className="pb-20">
          <div className="relative w-screen min-h-[700px] md:h-[700px] overflow-hidden text-gray-200">
            <img
              src={`https://image.tmdb.org/t/p/original${detailData.backdrop_path}`}
              className=" brightness-[.5] h-[1080px] sm:h-screen w-full object-cover"
              alt={detailData.original_title}
            />

            <div className=" container absolute top-[50%] sm:top-[52%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-3 sm:px-10 py-10 backdrop-blur-sm bg-white/30 dark:bg-black/30 rounded-xl shadow">
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
                    <div>
                      <span>{runtimeHr}hr </span>
                      <span>{runtimeMin}min</span>
                    </div>
                    <p>|</p>
                    <div className="">
                      <DateFormat release_date={detailData.release_date} />
                    </div>
                  </div>
                  <p className=" mb-5 text-center md:text-left">
                    {detailData.overview.substring(0, 450)}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-1 gap-y-2 items-center">
                    <button
                      onClick={handleFavMovies}
                      className="flex items-center space-x-1 primary-btn w-40"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5"
                      >
                        <path d="m9.653 16.915-.005-.003-.019-.01a20.759 20.759 0 0 1-1.162-.682 22.045 22.045 0 0 1-2.582-1.9C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 0 1 8-2.828A4.5 4.5 0 0 1 18 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 0 1-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 0 1-.69.001l-.002-.001Z" />
                      </svg>

                      <p>Favorite</p>
                    </button>
                    <Link to={detailData.homepage} target="blank">
                      <button className="primary-btn flex items-center w-40">
                        <RiNetflixFill />
                        Netflix
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container mx-auto overflow-hidden px-5 sm:px-0">
            <h4 className=" text-xl font-semibold mt-3 mb-2 dark:text-gray-300">
              Videos
            </h4>
            <VideoListForDetail trailerData={trailerData} />
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
  }
};

export default MovieDetailPage;
