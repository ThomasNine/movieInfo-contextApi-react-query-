import React, { useContext, useEffect, useState } from "react";
import MoviesCard from "../../components/MoviesCard";
import { AuthContext } from "../../store/AuthContext";
import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { useNavigate } from "react-router-dom";

const FavoriteMoviesPage = () => {
  const [data, setData] = useState(null);
  const { user } = useContext(AuthContext);
  const nav = useNavigate();

  useEffect(() => {
    onSnapshot(doc(db, "users", user.email), (doc) => {
      setData(doc.data()?.favoriteMovies);
    });
  }, [user.email]);
  const deleteFromFav = async (movieId) => {
    try {
      const result = data.filter((i) => i.id !== movieId);
      updateDoc(doc(db, "users", user.email), {
        favoriteMovies: result,
      });
    } catch (error) {
      console.log(error);
    }
  };
  const handleGotoDetail = (movie) => {
    let slug = movie.title.toLowerCase().replace(/ /g, "-");
    nav(`/movies/${slug}`, { state: { movieId: movie.id } });
  };

  return (
    <div className=" container mx-auto pt-16">
      <div className="flex flex-col sm:flex-row justify-center items-center  text-lg font-medium dark:text-gray-300 my-5 space-x-3">
        <h5>Favorite Movies</h5>
      </div>
      <div className="flex flex-wrap justify-center gap-x-[10px] sm:gap-x-5 gap-y-7">
        {data?.map((movie) => (
          <div
            key={movie.id}
            className="relative group transition-all ease-in-out group-hover:duration-700"
          >
            <div
              onClick={() => deleteFromFav(movie.id)}
              className="absolute   p-1 rounded-full bg-black/40 text-gray-200 z-40 top-2 right-2"
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
            </div>

            <div onClick={() => handleGotoDetail(movie)}>
              <MoviesCard movie={movie} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoriteMoviesPage;
