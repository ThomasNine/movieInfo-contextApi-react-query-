import React, { useEffect } from "react";
import NowPlayingMoviesCarousel from "../components/homePage/NowPlayingMoviesCarousel";
import AiringTodayTvCarousel from "../components/homePage/AiringTodayTvCarousel";
import HomePageMiniCarousel from "../components/homePage/HomePageMiniCarousel";
import { TopRatedMoviesContext } from "../store/TopRatedMoviesContext";
import { UpcomingMoviesContext } from "../store/UpcomingMoviesContext";
import { PopularMoviesContext } from "../store/PopularMoviesContext";
import { PopularTvContext } from "../store/tv/PopularTvContext";
import { TopRatedTvContext } from "../store/tv/TopRatedTvContext";
import { OnTheAirTvContext } from "../store/tv/OnTheAirTvContext";
import "../../node_modules/aos/dist/aos.css";

const HomePage = () => {
  return (
    <div className=" space-y-14">
      <NowPlayingMoviesCarousel />

      <div className="container mx-auto space-y-14">
        <HomePageMiniCarousel
          page={"movie"}
          animate={"zoom-in-right"}
          context={PopularMoviesContext}
        />

        <HomePageMiniCarousel
          page={"movie"}
          animate={"zoom-in-left"}
          context={TopRatedMoviesContext}
        />

        <HomePageMiniCarousel
          page={"movie"}
          animate={"zoom-in-right"}
          context={UpcomingMoviesContext}
        />
      </div>
      <AiringTodayTvCarousel />
      <div className="container mx-auto space-y-14">
        <HomePageMiniCarousel
          page={"tv"}
          animate={"zoom-in-left"}
          context={PopularTvContext}
        />

        <HomePageMiniCarousel
          page={"tv"}
          animate={"zoom-in-right"}
          context={TopRatedTvContext}
        />

        <HomePageMiniCarousel
          page={"tv"}
          context={OnTheAirTvContext}
          animate={"zoom-in-left"}
        />
      </div>
    </div>
  );
};

export default HomePage;
