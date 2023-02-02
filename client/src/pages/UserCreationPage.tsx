import React from "react";
import Selector from "../components/Selector";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "../axios";
import { useNavigate } from "react-router-dom";
import { RootState, useAppDispatch } from "../redux/store";
import { fetchGroups } from "../redux/thunks/fetchGroups";
import { useSelector } from "react-redux";

const roles = ["Teacher", "Student", "Deanery"];

interface IFormData {
  password: string;
  userName: string;
  email: string;
}

const StudentCreationPage = () => {
  const [error, setError] = React.useState("");
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const groupList = useSelector(
    (state: RootState) => state.groupList.groupList
  );

  React.useEffect(() => {
    dispatch(fetchGroups());
  }, []);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IFormData>();

  const onSubmit: SubmitHandler<IFormData> = (data) => {
    setError("");
    if (!userRole[0]) {
      return setError("Incorrect role");
    }
    if (userRole[0] === "Student" && !choicedGroup[0]) {
      return setError("Incorrect group");
    }
    axios
      .post("/user/create", {
        ...data,
        role: userRole[0],
        group: choicedGroup[0] ? choicedGroup[0] : null,
      })
      .then((res) => navigate("/"))
      .catch((err) => setError(err.response.data.message));
  };

  const [choicedGroup, setChoicedGroup] = React.useState<string[]>([]);
  const [userRole, setUserRole] = React.useState<string[]>([]);
  return (
    <div className="w-full h-screen flex items-center justify-center font-mono">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-blue-100 flex flex-col p-4 rounded-md w-4/12 min-h-1/2 justify-between items-center"
      >
        <h2 className="text-center font-bold w-full text-3xl mb-8 mt-8">
          New student
        </h2>

        <div className="text-xl mb-2 p-2 flex flex-row items-center w-full">
          <label className="mr-4 w-4/12">Name</label>
          <input
            {...register("userName", { required: true, minLength: 5 })}
            className="outline-none bg-transparent border-2 border-blue-600 rounded-md p-2 w-full"
            type="text"
          />
        </div>
        <div className="text-xl mb-2 p-2 flex flex-row items-center w-full">
          <label className="mr-4 w-4/12">Email</label>
          <input
            {...register("email", { required: true })}
            className="outline-none bg-transparent border-2 border-blue-600 rounded-md p-2 w-full"
            type="text"
          />
        </div>
        <div className="text-xl mb-2 p-2 flex flex-row items-center w-full">
          <label className="mr-4 w-4/12">Password</label>
          <input
            {...register("password", { required: true, minLength: 5 })}
            className="outline-none bg-transparent border-2 border-blue-600 rounded-md p-2 w-full"
            type="text"
          />
        </div>
        <Selector
          selectList={roles}
          selectorTitle={"Role"}
          setChoiced={setUserRole}
          choiced={userRole}
          allowedNumber={1}
        />

        {userRole[0] === "Student" && (
          <Selector
            selectList={groupList.map((item) => item.groupNumber)}
            selectorTitle={"Group"}
            setChoiced={setChoicedGroup}
            choiced={choicedGroup}
            allowedNumber={1}
          />
        )}
        <h3 className="text-3xl text-red-600 font-bold uppercase mt-4">
          {error}
        </h3>
        <div className="w-full flex items-center justify-center mt-12">
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
