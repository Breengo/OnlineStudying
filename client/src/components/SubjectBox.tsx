import React from "react";
import { Link } from "react-router-dom";
import { IGroupData } from "../redux/thunks/fetchGroups";
import { IUserData } from "../redux/thunks/fetchTeachers";
import DataSlider from "./DataSlider";

interface IBoxProps {
  teacher: IUserData;
  groups: IGroupData[];
  subjectId: string;
  subjectName: string;
}

const SubjectBox: React.FC<IBoxProps> = ({
  teacher,
  groups,
  subjectName,
  subjectId,
}) => {
  const teacherListRef = React.useRef<HTMLUListElement>(null);

  return (
    <Link
      to={`/subject/${subjectId}`}
      className="border-2 flex flex-col border-gray-500 w-1/5 h-72 p-6 rounded-md m-8 cursor-pointer hover:scale-105 transition-all shadow-xl shadow-blue-100 overflow-y-scroll scrollbar-hide"
    >
      <h5 className="text-4xl text-center mb-4">{subjectName}</h5>
      <h6 className="text-xl">
        Teacher:
        <span className="text-blue-500 ml-2 hover:underline">
          {teacher.userName}
        </span>
      </h6>
      <div className="text-xl mt-4">
        <p className="text-xl mb-2">Groups</p>
        <ul className="flex w-full flex-wrap">
          {groups.map((item, index) => (
            <li
              key={index}
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
              className="mr-2 mb-2 text-blue-400 p-1 hover:bg-blue-200 whitespace-nowrap border-2 border-blue-400 rounded-lg"
            >
              {item.groupNumber}
            </li>
          ))}
        </ul>
      </div>
    </Link>
  );
};

export default SubjectBox;
