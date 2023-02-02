import React from "react";
import { Link } from "react-router-dom";
import { IGroupData } from "../redux/thunks/fetchGroups";
import { IUserData } from "../redux/thunks/fetchTeachers";
import DataSlider from "./DataSlider";

interface IBoxProps {
  teachers: IUserData[];
  groups: IGroupData[];
  subjectName: string;
}

const SubjectBox: React.FC<IBoxProps> = ({ teachers, groups, subjectName }) => {
  const teacherListRef = React.useRef<HTMLUListElement>(null);

  return (
    <Link
      to={`/subject/${314}`}
      className="border-2 flex flex-col justify-between border-gray-500 w-1/5 h-80 p-6 rounded-md m-8 cursor-pointer hover:scale-105 transition-all shadow-xl shadow-blue-100"
    >
      <h5 className="text-4xl text-center mb-4">{subjectName}</h5>
      <div className="text-xl">
        <p className="text-center text-2xl text-blue-400">Teachers</p>
        <DataSlider
          style={1}
          dataList={teachers.map((item) => item.userName)}
        />
      </div>
      <div className="text-xl">
        <p className="text-center text-2xl text-blue-600">Groups</p>
        <DataSlider
          style={2}
          dataList={groups.map((item) => item.groupNumber)}
        />
      </div>
    </Link>
  );
};

export default SubjectBox;
