import React from "react";
import { logout } from "../redux/slices/authSlice";
import { useAppDispatch } from "../redux/store";
import userSVG from "../assets/user.svg";

const UserNavbar = () => {
  const dispatch = useAppDispatch();
  const logoutHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    dispatch(logout());
  };
  const [showMenu, setShowMenu] = React.useState(false);
  return (
    <div
      className="flex mr-24 items-center  relative rounded-md select-none"
      onClick={() => setShowMenu(!showMenu)}
    >
      <div className="flex p-2 items-center cursor-pointer hover:bg-blue-400 rounded-md">
        <img className="h-10 mr-2" src={userSVG} alt="error" />
        <h5 className="text-white text-xl">Mikhail Varganov</h5>
      </div>
      <div
        onClick={(e) => logoutHandler(e)}
        className={
          "absolute left-0 top-20 bg-blue-200 w-full text-gray-700 rounded-md" +
          (showMenu ? " visible" : " hidden")
        }
      >
        <h6 className="hover:bg-blue-400 hover:text-white cursor-pointer px-4 py-2 rounded-md">
          Logout
        </h6>
      </div>
    </div>
  );
};

export default UserNavbar;
