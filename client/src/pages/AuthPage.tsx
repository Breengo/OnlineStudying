import React from "react";
import { useAppDispatch } from "../redux/store";
import { login } from "../redux/slices/authSlice";
import { SubmitHandler, useForm } from "react-hook-form";
import axios from "../axios";

interface ILoginData {
  email: string;
  password: string;
}

const AuthPage = () => {
  const dispatch = useAppDispatch();
  const [error, setError] = React.useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginData>();

  const onSubmit: SubmitHandler<ILoginData> = (data: any) => {
    axios
      .post("/user/login", data)
      .then((res) => {
        dispatch(login(res.data));
        window.localStorage.setItem("token", res.data.token);
      })
      .catch((err) => setError(err.response.data.message));
  };

  return (
    <div className="flex items-center justify-center w-full h-screen font-mono">
      <form
        action="submit"
        className="flex flex-col p-12 bg-gray-300 text-lg rounded-md"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="text-center text-3xl mb-8">Authorization</h2>
        <label>Email</label>
        <input
          {...register("email", { required: true })}
          className="rounded-md px-4 py-2 mt-2 mb-4 outline-none border-2 focus:border-blue-500"
          type="text"
          placeholder="Email"
        />
        <label>Password</label>
        <input
          {...register("password", { required: true })}
          className="rounded-md px-4 py-2 mt-2 mb-4 outline-none border-2 focus:border-blue-500"
          type="password"
          placeholder="Password"
        />
        <h3 className="text-3xl text-red-500">{error}</h3>
        <button
          type="submit"
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default AuthPage;
