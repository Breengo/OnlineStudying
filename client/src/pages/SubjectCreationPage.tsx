import React from "react";
import Selector from "../components/Selector";
import { RootState, useAppDispatch } from "../redux/store";
import { fetchTeachers } from "../redux/thunks/fetchTeachers";
import { useSelector } from "react-redux";
import { fetchGroups } from "../redux/thunks/fetchGroups";
import axios from "../axios";
import { useNavigate } from "react-router-dom";

const SubjectCreationPage = () => {
  const [choicedTeacher, setChoicedTeacher] = React.useState<string[]>([]);
  const [choicedGroup, setChoicedGroup] = React.useState<string[]>([]);
  const [subjectName, setSubjectName] = React.useState("");
  const [error, setError] = React.useState("");
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const teacherList = useSelector(
    (state: RootState) => state.teacherList.teacherList
  );
  const groupList = useSelector(
    (state: RootState) => state.groupList.groupList
  );
  React.useEffect(() => {
    dispatch(fetchTeachers());
    dispatch(fetchGroups());
  }, []);

  const onSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    if (subjectName === "") {
      return setError("Incorrect subjectname");
    }
    if (choicedTeacher.length === 0) {
      return setError("Incorrect teacher");
    }
    if (choicedGroup.length === 0) {
      return setError("Incorrect group");
    }
    axios
      .post("/subject/create", {
        teacher: choicedTeacher[0],
        groups: choicedGroup,
        subjectName,
      })
      .then((res) => navigate("/"))
      .catch((err) => setError(err.response.data.message));
  };

  return (
    <div className="w-full h-screen flex items-center justify-center font-mono">
      <form className="bg-blue-100 flex flex-col p-4 rounded-md w-4/12 h-1/2 justify-between items-center">
        <h2 className="text-center font-bold w-full text-3xl mb-8 mt-8">
          New subject
        </h2>

        <div className="text-xl mb-2 p-2 flex flex-row items-center w-full">
          <label className="mr-4 w-4/12">Subject</label>
          <input
            value={subjectName}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSubjectName(e.target.value)
            }
            className="outline-none bg-transparent border-2 border-blue-600 rounded-md p-2 w-full"
            type="text"
          />
        </div>

        <Selector
          selectList={teacherList.map((item) => item.userName)}
          allowedNumber={1}
          selectorTitle={"Teacher"}
          setChoiced={setChoicedTeacher}
          choiced={choicedTeacher}
        />

        <Selector
          selectList={groupList.map((item) => item.groupNumber)}
          selectorTitle={"Group"}
          setChoiced={setChoicedGroup}
          choiced={choicedGroup}
        />
        <p className="text-red-500 text-3xl">{error}</p>
        <div className="w-full flex items-center justify-center mt-16">
          <button
            onClick={(e) => onSubmit(e)}
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
