import { useParams } from "react-router-dom";
import React from "react";
import axios from "../axios";
import WindowClose from "./WindowClose";
import { useAppDispatch } from "../redux/store";
import { fetchSubjectInfo } from "../redux/thunks/fetchSubjectInfo";
import { ICreationWindowProps } from "./DocCreationWindow";

const VideoCreationWindow: React.FC<ICreationWindowProps> = ({
  moduleID,
  setShownWindow,
}) => {
  const _id = useParams().id;
  const dispatch = useAppDispatch();
  const [inputValue, setInputValue] = React.useState("");
  const onSaveHandler = () => {
    if (_id && inputValue != "") {
      axios
        .post("/moduleItem/createModuleItem", {
          _id,
          moduleID,
          itemType: "video",
          itemName: inputValue,
        })
        .then((res) => {
          dispatch(fetchSubjectInfo(_id));
          setShownWindow(null);
        });
    }
  };
  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 z-10 flex justify-center items-center">
      <WindowClose setShownWindow={setShownWindow} />
      <div className="bg-blue-500 bg-opacity-50 p-12 rounded-md flex flex-col justify-center">
        <div className="p-40 rounded-md border-2 border-dashed mb-4">
          <h3 className="text-white text-xl text-center font-bold">
            Drop file here
          </h3>
          <h3 className="text-white text-xl text-center font-bold mt-4">
            or
            <label
              htmlFor="uploadInput"
              className="border-2 border-gray-500 px-2 py-1 rounded-lg bg-gray-400 hover:bg-gray-500 cursor-pointer"
            >
              Choose file
            </label>
          </h3>
          <input
            id="uploadInput"
            className="hidden"
            placeholder=""
            type="file"
          />
        </div>
        <input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setInputValue(e.target.value)
          }
          placeholder="Filename"
          className="py-2 px-4 rounded-md text-xl outline-none focus:border-blue-500 border-2"
          type="text"
        />
        <button
          onClick={onSaveHandler}
          className="mt-4 py-2 px-4 rounded-lg text-white  text-xl font-bold hover:bg-blue-700 border-white border-2"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default VideoCreationWindow;
