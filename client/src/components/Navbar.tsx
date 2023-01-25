import React from "react";
import { Link, Outlet } from "react-router-dom";
import UserNavbar from "./UserNavbar";

import plusSVG from "../assets/plus.svg";

const Navbar = () => {
  return (
    <>
      <div className="grid grid-cols-2 w-full pt-4 items-center bg-blue-500 pb-4 fixed top-0 font-serif select-none">
        <Link to="/" className="cursor-pointer">
          <h1 className="text-5xl ml-24 text-white">University</h1>
        </Link>
        <div className="flex justify-self-end">
          <Link
            to="/create_subject"
            className="flex items-center mr-8 hover:bg-blue-400 px-2 cursor-pointer rounded-md "
          >
            <img className="h-8" src={plusSVG} alt="error" />
            <h5 className="text-white">New subject</h5>
          </Link>
          <Link
            to="/create_group"
            className="flex items-center mr-8 hover:bg-blue-400 px-2 cursor-pointer rounded-md "
          >
            <img className="h-8" src={plusSVG} alt="error" />
            <h5 className="text-white">New group</h5>
          </Link>
          <Link
            to="/create_student"
            className="flex items-center mr-8 hover:bg-blue-400 px-2 cursor-pointer rounded-md "
          >
            <img className="h-8" src={plusSVG} alt="error" />
            <h5 className="text-white">New student</h5>
          </Link>
          <UserNavbar />
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
