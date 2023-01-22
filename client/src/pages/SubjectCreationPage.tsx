import React from "react";
import Selector from "../components/Selector";

const teacherList: string[] = [
  "Ivanov I.I.",
  "Rustamov A.A.",
  "Konev A.V.",
  "Povarnin T.T.",
];

const groupList: string[] = ["720-1", "720-2", "730-1", "640"];

const SubjectCreationPage = () => {
  const [choicedTeacher, setChoicedTeacher] = React.useState<string[]>([]);
  const [choicedGroup, setChoicedGroup] = React.useState<string[]>([]);

  const teacherButtonRef = React.useRef<HTMLButtonElement>(null);
  const groupButtonRef = React.useRef<HTMLButtonElement>(null);

  return (
    <div className="w-full h-screen flex items-center justify-center font-mono">
      <form className="bg-blue-100 flex flex-col p-4 rounded-md w-4/12 h-1/3">
        <h2 className="text-center font-bold w-full text-3xl mb-8">
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
          selectorRef={teacherButtonRef}
          secondSelectorRef={groupButtonRef}
          selectorTitle={"Teacher"}
          setChoiced={setChoicedTeacher}
          choiced={choicedTeacher}
        />

        <Selector
          selectList={groupList}
          selectorRef={groupButtonRef}
          secondSelectorRef={teacherButtonRef}
          selectorTitle={"Group"}
          setChoiced={setChoicedGroup}
          choiced={choicedGroup}
        />

        <div className="w-full flex items-center justify-center mt-16">
          <button
            type="submit"
            className="py-2 px-12 text-xl border-blue-600 border-2 rounded-md hover:bg-blue-600 hover:text-white w-1/2"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default SubjectCreationPage;
