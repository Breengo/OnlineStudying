import axios from "../axios";
import React from "react";
import plusSVG from "../assets/plus.svg";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "../redux/store";
import { fetchSubjectInfo } from "../redux/thunks/fetchSubjectInfo";

const NewModuleBlock = () => {
  const [hover, setHover] = React.useState(false);
  const [showInput, setShowInput] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();
  const _id = useParams().id;

  const onCreateHandler = () => {
    if (inputRef.current?.value != "") {
      axios
        .post("/subject/createModule", {
          _id,
          moduleName: inputRef.current?.value,
        })
        .then((res) => {
          if (_id) {
            dispatch(fetchSubjectInfo(_id));
          }
        });
    }
  };

  return (
    <div
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => {
        setShowInput(true);
        setTimeout(() => {
          inputRef.current?.focus();
        }, 0);
      }}
      className={
        "flex flex-col p-4 rounded-lg mb-6 justify-center cursor-pointer " +
        (hover && !showInput ? "bg-blue-200" : "bg-blue-100")
      }
    >
      {!showInput && (
        <>
          <h2
            className={
              "font-semibold text-3xl mb-4 ml-10 text-center " +
              (hover ? "text-black" : "text-gray-500")
            }
          >
            New module
          </h2>
          <img
            className={"h-20 invert " + (hover ? "opacity-90" : "opacity-30")}
            src={plusSVG}
            alt="error"
          />
        </>
      )}
      {showInput && (
        <div className="w-full">
          <input
            ref={inputRef}
            onBlur={() => setTimeout(() => setShowInput(false), 100)}
            className="w-full text-xl p-2 rounded-md text-center outline-none focus:border-blue-300 border-2"
            type="text"
          />

          <button
            onClick={onCreateHandler}
            className="px-8 py-2 w-full bg-blue-500 rounded-md mt-4 text-white text-xl font-bold uppercase"
          >
            Create
          </button>
        </div>
      )}
    </div>
  );
};

export default NewModuleBlock;
