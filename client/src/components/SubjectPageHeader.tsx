import React from "react";
import teacherIMG from "../assets/teacherIMG.png";
import redactSVG from "../assets/redact.svg";
import xmarkSVG from "../assets/xmark.svg";
import { IUserData } from "../redux/thunks/fetchTeachers";
import HeaderTextRedactor from "./HeaderTextRedactor";

interface IHeaderInfo {
  subjectName: string;
  headerText: string;
  teacher: IUserData;
}

const SubjectPageHeader: React.FC<IHeaderInfo> = ({
  subjectName,
  headerText,
  teacher,
}) => {
  const [showTextarea, setShowTextarea] = React.useState(false);
  return (
    <header
      className={
        "flex flex-col p-8 rounded-lg mb-6 relative " +
        (showTextarea ? "bg-green-100" : "bg-blue-100")
      }
    >
      <div className="absolute top-1 right-1">
        <img
          onClick={() => setShowTextarea(!showTextarea)}
          className="h-10 opacity-50 hover:opacity-90 cursor-pointer"
          src={showTextarea ? xmarkSVG : redactSVG}
          alt="error"
        />
      </div>
      <h3 className="font-bold text-3xl mb-4 ml-10">{subjectName}</h3>
      <div className="flex justify-center">
        {!showTextarea && (
          <div className="flex flex-col mr-8 w-10/12">
            <p>{headerText}</p>
          </div>
        )}
        {showTextarea && (
          <HeaderTextRedactor
            setShowTextarea={setShowTextarea}
            headerText={headerText}
          />
        )}
        <div className="flex flex-col justify-center items-center h-full">
          <img
            className="h-20 w-20 rounded-full"
            src={teacherIMG}
            alt="error"
          />
          <h4 className="text-lg text-blue-500 text-center">
            {teacher.userName}
          </h4>
        </div>
      </div>
    </header>
  );
};

export default SubjectPageHeader;
