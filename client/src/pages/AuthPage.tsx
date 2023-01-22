import React, { FormEvent } from "react";
import { useAppDispatch } from "../redux/store";
import { login } from "../redux/slices/authSlice";

const AuthPage = () => {
  const dispatch = useAppDispatch();
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
  };
  return (
    <div className="flex items-center justify-center w-full h-screen font-mono">
      <form
        action="submit"
        className="flex flex-col p-12 bg-gray-300 text-lg rounded-md"
        onSubmit={(e) => onSubmit(e)}
      >
        <h2 className="text-center text-3xl mb-8">Authorization</h2>
        <label>Login</label>
        <input
          className="rounded-md px-4 py-2 mt-2 mb-4 outline-none border-2 focus:border-blue-500"
          type="text"
          placeholder="Login"
        />
        <label>Password</label>
        <input
          className="rounded-md px-4 py-2 mt-2 mb-4 outline-none border-2 focus:border-blue-500"
          type="password"
          placeholder="Password"
        />
        <button
          onClick={() => dispatch(login())}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default AuthPage;
