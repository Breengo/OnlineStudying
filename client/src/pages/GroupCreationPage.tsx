import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "../axios";

const GroupCreationPage = () => {
  const [groupNumber, setGroupNumber] = React.useState("");
  const [error, setError] = React.useState("");
  const navigate = useNavigate();
  const onSubmit = () => {
    setError("");
    if (groupNumber === "") {
      setError("Incorrect number");
    } else {
      axios
        .post("/group/create", { groupNumber })
        .then((res) => navigate("/"))
        .catch((err) => {
          setError(err.response.data.message);
        });
    }
  };
  return (
    <div className="w-full h-screen flex items-center justify-center font-mono">
      <div className="flex flex-col items-center justify-center h-fit w-fit border-2 bg-blue-100 py-2 px-4 rounded-md justify-between">
        <h2 className="text-center font-bold w-full text-5xl mb-6 mt-2 uppercase text-blue-700">
          New group
        </h2>
        <input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setGroupNumber(e.target.value)
          }
          value={groupNumber}
          className="outline-none bg-transparent border-2 border-blue-600 rounded-md p-2 text-2xl  w-full text-center"
          type="text"
        />
        <h5 className="text-3xl text-red-500 my-4">{error}</h5>
        <button
          onClick={onSubmit}
          className="py-2 px-12 mb-8 text-xl border-blue-600 border-2 rounded-md hover:bg-blue-600 hover:text-white w-full"
        >
          Create
        </button>
      </div>
    </div>
  );
};

export default GroupCreationPage;
