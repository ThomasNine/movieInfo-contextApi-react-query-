import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  AiringTodayTvShowsPage,
  FilterMoviesPage,
  FilterTvPage,
  HomePage,
  MovieDetailPage,
  NotFound,
  NowPlayingMoivesPage,
  OnTVPage,
  PopularMoviesPage,
  PopularPeoplePage,
  PopularTvShowsPage,
  SearchPage,
  SerieDetailPage,
  TopRatedMoviesPage,
  TopRatedTvShowsPage,
  UpcomingMoviesPage,
} from "../pages";

const RoutePath = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" />
        <Route path="/login" />

        {/* movies routes  */}
        <Route
          path="/movies/now-playing/page/:page"
          element={<NowPlayingMoivesPage />}
        />
        <Route
          path="/movies/popular/page/:page"
          element={<PopularMoviesPage />}
        />
        <Route
          path="/movies/upcoming/page/:page"
          element={<UpcomingMoviesPage />}
        />
        <Route
          path="/movies/top-rated/page/:page"
          element={<TopRatedMoviesPage />}
        />
        <Route path="/movies/:slug" element={<MovieDetailPage />} />
        <Route
          path="/movies/:filterMovies/page/:page"
          element={<FilterMoviesPage />}
        />
        <Route
          path="/movies/search/:query/page/:page"
          element={<SearchPage />}
        />

        {/* tv shows  */}
        <Route
          path="/tv/airing-today/page/:page"
          element={<AiringTodayTvShowsPage />}
        />
        <Route path="/tv/popular/page/:page" element={<PopularTvShowsPage />} />
        <Route path="/tv/on-the-air/page/:page" element={<OnTVPage />} />
        <Route
          path="/tv/top-rated/page/:page"
          element={<TopRatedTvShowsPage />}
        />
        <Route path="/tv/:slug" element={<SerieDetailPage />} />
        <Route path="/tv/:filter/page/:page" element={<FilterTvPage />} />
        <Route path="/tv/search/:query/page/:page" element={<SearchPage />} />

        {/* person  */}
        <Route path="/people" element={<PopularPeoplePage />} />

        {/* fallback route  */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default RoutePath;
