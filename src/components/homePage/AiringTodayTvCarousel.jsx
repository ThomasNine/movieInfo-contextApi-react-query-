import React, { useContext } from "react";
import { AiringTodayTvContext } from "../../store/tv/AiringTodayTvContext";
import CarouselHomePage from "../CarouselHomePage";

const AiringTodayTvCarousel = () => {
  const { data, isSuccess, isLoading, isError, error } =
    useContext(AiringTodayTvContext);
  if (isLoading) {
    return <h4>Loading</h4>;
  } else if (isError) {
    return <h4>error</h4>;
  } else if (isSuccess) {
    return (
      <>
        <CarouselHomePage slides={data} page={"tv"} />
      </>
    );
  }
};

export default AiringTodayTvCarousel;
