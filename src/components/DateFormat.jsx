import React from "react";

const DateFormat = ({ release_date, first_air_date }) => {
  let dateObject;

  if (release_date) {
    dateObject = new Date(release_date);
  } else if (first_air_date) {
    dateObject = new Date(first_air_date);
  }
  const formatedDate = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(dateObject);
  return <>{formatedDate}</>;
};

export default DateFormat;
