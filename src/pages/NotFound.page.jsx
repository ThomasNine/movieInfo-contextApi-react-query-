import React from "react";
import { Link } from "react-router-dom";
const NotFoundPage = () => {
  return (
    <div className=" w-full h-screen flex justify-center items-center">
      <div className=" flex flex-col space-y-4 justify-center items-center">
        <div className="flex justify-center items-center space-x-3">
          <h4 className="text-3xl font-semibold ">404</h4>
          <p className=" text-3xl">|</p>
          <p className=" text-base font-medium">
            This page could not be found.
          </p>
        </div>
        <Link to={"/"}>
          <button className=" primary-btn rounded-full">Home</button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
