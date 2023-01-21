import React from "react";
import { Outlet } from "react-router-dom";

import userSVG from "../assets/user.svg";

const Navbar = () => {
  return (
    <>
      <div className="grid grid-cols-2 w-full pt-4 items-center bg-blue-500 pb-4 fixed top-0">
        <div className="cursor-pointer">
          <h1 className="text-5xl ml-24 text-white">University</h1>
        </div>
        <div className="flex justify-self-end mr-24 items-center cursor-pointer">
          <img className="h-10 mr-2" src={userSVG} alt="error" />
          <h5 className="text-white text-lg">Name</h5>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
