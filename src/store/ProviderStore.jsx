import React from "react";
import DarkModeProvider from "./DarkModeContext";
import NowPlayingMoviesProvider from "./NowPlayingMoviesContext";
import PopularMoviesContextProvider from "./PopularMoviesContext";
import TopRatedMoviesContextProvider from "./TopRatedMoviesContext";
import UpcomingMoviesContextProvider from "./UpcomingMoviesContext";
import AiringTodayTvProvider from "./tv/AiringTodayTvContext";
import PopularTvProvider from "./tv/PopularTvContext";
import TopRatedTvProvider from "./tv/TopRatedTvContext";
import OnTheAirTvContextProvider from "./tv/OnTheAirTvContext";
import GeneralContextProvider from "./GeneralContext";
import AuthContextProvider from "./AuthContext";

const ProviderStore = ({ children }) => {
  return (
    <AuthContextProvider>
      <DarkModeProvider>
        <GeneralContextProvider>
          <AiringTodayTvProvider>
            <OnTheAirTvContextProvider>
              <TopRatedTvProvider>
                <PopularTvProvider>
                  <NowPlayingMoviesProvider>
                    <PopularMoviesContextProvider>
                      <TopRatedMoviesContextProvider>
                        <UpcomingMoviesContextProvider>
                          {children}
                        </UpcomingMoviesContextProvider>
                      </TopRatedMoviesContextProvider>
                    </PopularMoviesContextProvider>
                  </NowPlayingMoviesProvider>
                </PopularTvProvider>
              </TopRatedTvProvider>
            </OnTheAirTvContextProvider>
          </AiringTodayTvProvider>
        </GeneralContextProvider>
      </DarkModeProvider>
    </AuthContextProvider>
  );
};

export default ProviderStore;
