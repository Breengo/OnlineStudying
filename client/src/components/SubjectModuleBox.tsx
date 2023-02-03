import React from "react";
import ModuleItem from "./ModuleItem";
import NewModuleItem from "./NewModuleItem";

import redactSVG from "../assets/redact.svg";
import deleteSVG from "../assets/delete.svg";
import xmarkSVG from "../assets/xmark.svg";
import DocCreationWindow from "./DocCreationWindow";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import FolderCreationWindow from "./FolderCreationWindow";
import TestCreationWindow from "./TestCreationWindow";
import DiscussionCreationWindow from "./DiscussionCreationWindow";

const SubjectModuleBox = () => {
  const [updateModule, setUpdateModule] = React.useState(false);
  const [moduleName, setModuleName] = React.useState("Module");
  const shownWindow = useSelector(
    (state: RootState) => state.shownCreationWindow.shownWindow
  );
  return (
    <>
      <div
        className={
          "flex flex-col p-8 rounded-lg mb-6 relative " +
          (updateModule ? "bg-green-100" : "bg-blue-100")
        }
      >
        <img
          onClick={() => setUpdateModule(!updateModule)}
          className="h-10 opacity-40 hover:opacity-90 cursor-pointer absolute right-1 top-1"
          src={updateModule ? xmarkSVG : redactSVG}
          alt="error"
        />

        {!updateModule && (
          <h3 className="font-semibold text-3xl mb-4 ml-10">{moduleName}</h3>
        )}
        {updateModule && (
          <div className="w-full flex justify-center pr-8 pl-2">
            <input
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setModuleName(e.target.value)
              }
              value={moduleName}
              className="w-11/12 text-center rounded-md px-4 py-2 text-xl outline-none focus:border-green-300 border-2"
              type="text"
            />
          </div>
        )}
        <div className="flex flex-col px-4 pt-4">
          <ModuleItem type={"discussion"} title={"Disscusion"} />
          <ModuleItem type={"doc"} title={"Docs"} />
          <ModuleItem type={"folder"} title={"Folder"} />
          <ModuleItem type={"test"} title={"Test"} />
          <NewModuleItem />
        </div>

        {updateModule && (
          <button className="w-fit flex items-center bg-red-500 py-2 px-4 rounded-md opacity-70 hover:opacity-100 ml-4">
            <h3 className="text-lg font-bold text-white mr-4">Delete module</h3>
            <img className="h-8" src={deleteSVG} alt="error" />
          </button>
        )}
      </div>
      {shownWindow == "Doc" && <DocCreationWindow />}
      {shownWindow == "Folder" && <FolderCreationWindow />}
      {shownWindow == "Test" && <TestCreationWindow />}
      {shownWindow == "Discussion" && <DiscussionCreationWindow />}
    </>
  );
};

export default SubjectModuleBox;
