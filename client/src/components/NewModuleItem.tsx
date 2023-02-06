import React from "react";
import plusSVG from "../assets/plus.svg";
import docSVG from "../assets/doc.svg";
import disscusionSVG from "../assets/discussion.svg";
import videoSVG from "../assets/video.svg";
import testSVG from "../assets/test.svg";
import redactSVG from "../assets/redact.svg";
import xmarkSVG from "../assets/xmark.svg";
import NewModuleSelect from "./NewModuleSelect";
import { ShownWindowType } from "./SubjectModuleBox";

interface INewItemProps {
  moduleID: string;
  setShownWindow: (IWindow: ShownWindowType) => void;
}

const NewModuleItem: React.FC<INewItemProps> = ({
  moduleID,
  setShownWindow,
}) => {
  const [showItemOptions, setShowItemOptions] = React.useState(false);
  return (
    <div className="flex w-full items-center">
      {!showItemOptions && (
        <div
          onClick={() => setShowItemOptions(true)}
          className="flex items-center px-8 py-2 bg-green-400 rounded-md cursor-pointer hover:bg-blue-300 mb-4 w-full"
        >
          <img className="h-6 mr-4" src={plusSVG} alt="error" />
          <h6 className="text-xl">New</h6>
        </div>
      )}
      {showItemOptions && (
        <div className="w-full flex flex-col bg-blue-200 rounded-md">
          <div
            onClick={() => setShowItemOptions(false)}
            className="flex items-center px-8 py-2 bg-green-200 rounded-t-md cursor-pointer hover:bg-green-300 w-full"
          >
            <img className="h-6 mr-4" src={xmarkSVG} alt="error" />
            <h6 className="text-xl">Close</h6>
          </div>
          <NewModuleSelect
            setShownWindow={setShownWindow}
            icon={docSVG}
            type={"document"}
          />
          <NewModuleSelect
            setShownWindow={setShownWindow}
            icon={disscusionSVG}
            type={"discussion"}
          />
          <NewModuleSelect
            setShownWindow={setShownWindow}
            icon={videoSVG}
            type={"video"}
          />
          <NewModuleSelect
            setShownWindow={setShownWindow}
            icon={testSVG}
            type={"test"}
          />
        </div>
      )}
      <div className="ml-2 pb-4">
        <img className="h-8 opacity-0" src={redactSVG} alt="error" />
      </div>
    </div>
  );
};

export default NewModuleItem;
