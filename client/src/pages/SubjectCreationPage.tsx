import axios from "../axios";
import React from "react";
import Selector from "../components/Selector";

const teacherList: string[] = [
  "Ivanov I.I.",
  "Rustamov A.A.",
  "Konev A.V.",
  "Povarnin T.T.",
  "Ivanov G.I.",
  "Rustamov G.A.",
  "Konev G.V.",
  "Povarnin G.T.",
  "Ivanov L.I.",
  "Rustamov L.A.",
  "Konev L.V.",
  "Povarnin L.T.",
];

export interface IGroup {
  groupNumber: string;
}

const SubjectCreationPage = () => {
  const [choicedTeacher, setChoicedTeacher] = React.useState<string[]>([]);
  const [choicedGroup, setChoicedGroup] = React.useState<string[]>([]);
  const [groupList, setGroupList] = React.useState<string[]>([]);

  React.useEffect(() => {
    axios.get("/group/getAll").then((res) => {
      setGroupList(res.data.map((item: IGroup) => item.groupNumber));
    });
  }, []);

  return (
    <div className="w-full h-screen flex items-center justify-center font-mono">
      <form className="bg-blue-100 flex flex-col p-4 rounded-md w-4/12 h-1/2 justify-between items-center">
        <h2 className="text-center font-bold w-full text-3xl mb-8 mt-8">
          New subject
        </h2>

        <div className="text-xl mb-2 p-2 flex flex-row items-center w-full">
          <label className="mr-4 w-4/12">Subject</label>
          <input
            className="outline-none bg-transparent border-2 border-blue-600 rounded-md p-2 w-full"
            type="text"
          />
        </div>

        <Selector
          selectList={teacherList}
          selectorTitle={"Teacher"}
          setChoiced={setChoicedTeacher}
          choiced={choicedTeacher}
        />

        <Selector
          selectList={groupList}
          selectorTitle={"Group"}
          setChoiced={setChoicedGroup}
          choiced={choicedGroup}
        />

        <div className="w-full flex items-center justify-center mt-16">
          <button
            type="submit"
            className="py-2 px-12 mb-8 text-xl border-blue-600 border-2 rounded-md hover:bg-blue-600 hover:text-white w-1/2"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default SubjectCreationPage;
