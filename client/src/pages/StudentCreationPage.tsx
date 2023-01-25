import React from "react";
import Selector from "../components/Selector";
import { groupList } from "./SubjectCreationPage";

const StudentCreationPage = () => {
  const [choicedGroup, setChoicedGroup] = React.useState<string[]>([]);
  return (
    <div className="w-full h-screen flex items-center justify-center font-mono">
      <form className="bg-blue-100 flex flex-col p-4 rounded-md w-4/12 h-1/2 justify-between items-center">
        <h2 className="text-center font-bold w-full text-3xl mb-8 mt-8">
          New student
        </h2>

        <div className="text-xl mb-2 p-2 flex flex-row items-center w-full">
          <label className="mr-4 w-4/12">Name</label>
          <input
            className="outline-none bg-transparent border-2 border-blue-600 rounded-md p-2 w-full"
            type="text"
          />
        </div>
        <div className="text-xl mb-2 p-2 flex flex-row items-center w-full">
          <label className="mr-4 w-4/12">Email</label>
          <input
            className="outline-none bg-transparent border-2 border-blue-600 rounded-md p-2 w-full"
            type="text"
          />
        </div>
        <div className="text-xl mb-2 p-2 flex flex-row items-center w-full">
          <label className="mr-4 w-4/12">Password</label>
          <input
            className="outline-none bg-transparent border-2 border-blue-600 rounded-md p-2 w-full"
            type="text"
          />
        </div>
        <Selector
          selectList={groupList}
          selectorTitle={"Group"}
          setChoiced={setChoicedGroup}
          choiced={choicedGroup}
          allowedNumber={1}
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

export default StudentCreationPage;
