import React from "react";
import { NavLink } from "react-router-dom";

const MiniNavbarDropdown = ({
  toggleMiniLink,
  setToggleMiniLink,
  NavLinkArr,
}) => {
  return (
    <div>
      <div
        className="fixed top-0 right-0 bg-black  w-screen h-screen dark:bg-white opacity-10 z-30"
        onClick={() => {
          setToggleMiniLink(!toggleMiniLink);
        }}
      ></div>
      <div className="absolute top-[135px] w-[160px] shadow border dark:border-gray-700 bg-gray-300 dark:bg-gray-900 rounded-xl z-40">
        {NavLinkArr.map((each) => (
          <NavLink
            to={each.toAttri}
            key={each.navName}
            className={({ isActive }) =>
              isActive ? "bg-orange-600 rounded-full" : ""
            }
            onClick={() => {
              setToggleMiniLink(!toggleMiniLink);
            }}
          >
            <h1 className="mini-nav-link mb-2">{each.navName}</h1>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default MiniNavbarDropdown;
