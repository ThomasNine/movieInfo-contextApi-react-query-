import React from "react";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const CircularRating = ({ vote_average, maxValue, text_size }) => {
  const voteNumber = parseFloat(vote_average.toFixed(1));

  return (
    <CircularProgressbarWithChildren
      value={voteNumber}
      maxValue={maxValue}
      styles={buildStyles({
        pathColor: `rgb(234 88 12)`,
        trailColor: "#d6d6d6",
      })}
    >
      <p className={`text-white font-semibold ${text_size}`}>
        {voteNumber * 10}
        <small className="">%</small>
      </p>
    </CircularProgressbarWithChildren>
  );
};

export default CircularRating;
