import * as React from "react";
import Pagination from "@mui/material/Pagination";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useContext } from "react";
import { DarkModeConstext } from "../store/DarkModeContext";
import { useNavigate } from "react-router-dom";

export default function PaginationNoContext({
  url,
  currentPage,
  setCurrentPage,
  data,
  selectedGenre,
  releaseYr,
}) {
  const { darkMode } = useContext(DarkModeConstext);

  const nav = useNavigate();

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
    nav(url + value, { state: { selectedGenre, releaseYr } });
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
