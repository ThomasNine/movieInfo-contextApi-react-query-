import * as React from "react";
import Pagination from "@mui/material/Pagination";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useContext } from "react";
import { DarkModeConstext } from "../store/DarkModeContext";
import { useNavigate, useParams } from "react-router-dom";
import { NowPlayingMoviesContext } from "../store/NowPlayingMoviesContext";
import { PopularMoviesContext } from "../store/PopularMoviesContext";
import { TopRatedMoviesContext } from "../store/TopRatedMoviesContext";
import { UpcomingMoviesContext } from "../store/UpcomingMoviesContext";

export default function PaginationOutlined({ url, context }) {
  const { darkMode } = useContext(DarkModeConstext);

  const nav = useNavigate();
  const { data, currentPage, setCurrentPage } = useContext(context);

  const theme = createTheme({
    palette: {
      primary: {
        main: "#ea580c",
      },
      mode: darkMode ? "dark" : "light",
    },
  });

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
    nav(url + value);
  };

  return (
    <>
      <div className=" sm:hidden">
        <ThemeProvider theme={theme}>
          <Pagination
            count={data?.total_pages}
            variant="outlined"
            color="primary"
            size="small"
            page={currentPage}
            onChange={handlePageChange}
          />
        </ThemeProvider>
      </div>
      <div className="hidden sm:block">
        <ThemeProvider theme={theme}>
          <Pagination
            count={data?.total_pages}
            variant="outlined"
            color="primary"
            size="large"
            page={currentPage}
            onChange={handlePageChange}
          />
        </ThemeProvider>
      </div>
    </>
  );
}
