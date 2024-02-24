import React, { useContext } from "react";
import { NowPlayingMoviesContext } from "../../store/NowPlayingMoviesContext";
import CarouselHomePage from "../CarouselHomePage";

const NowPlayingMoviesCarousel = () => {
  const { data, isSuccess, isLoading, isError, error } = useContext(
    NowPlayingMoviesContext
  );
  if (isLoading) {
    return <h4 className=" w-screen h-screen">Loading</h4>;
  } else if (isError) {
    return <h4>error</h4>;
  } else if (isSuccess) {
    return (
      <>
        <CarouselHomePage slides={data} page={"movie"} />
      </>
    );
  }
};

export default NowPlayingMoviesCarousel;
