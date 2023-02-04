import React from "react";
import { Routes, Route } from "react-router-dom";
import { useAppDispatch } from "./redux/store";
import { useSelector } from "react-redux";
import { login } from "./redux/slices/authSlice";
import axios from "./axios";
import Navbar from "./components/Navbar";
import AuthPage from "./pages/AuthPage";
import MainPage from "./pages/MainPage";
import SubjectPage from "./pages/SubjectPage";
import ProtectedRoute from "./utils/ProtectedRoute";
import { RootState } from "./redux/store";
import SubjectCreationPage from "./pages/SubjectCreationPage";
import GroupCreationPage from "./pages/GroupCreationPage";
import StudentCreationPage from "./pages/UserCreationPage";
import { InfinitySpin } from "react-loader-spinner";

function App() {
  const isAuth = useSelector((state: RootState) => state.auth.isAuth);
  const [isLoading, setIsLoading] = React.useState(true);
  const dispatch = useAppDispatch();
  const token = window.localStorage.getItem("token");
  if (token) {
    axios
      .get("/user/auth", {
        headers: {
          auth: token,
        },
      })
      .then((res) => dispatch(login(res.data)))
      .catch()
      .finally(() => setIsLoading(false));
  } else {
    setIsLoading(false);
  }

  if (isLoading) {
    return (
      <div className="w-full h-screen flex flex-col justify-center items-center">
        <InfinitySpin width="200" color="#315dd6" />
        <h1 className="text-3xl font-bold text-blue-500">Loading...</h1>
      </div>
    );
  }
  return (
    <div className="App w-full">
      <Routes>
        <Route element={<Navbar />}>
          <Route
            element={<ProtectedRoute isAllowed={isAuth} redirect={"/auth"} />}
          >
            <Route path="/" element={<MainPage />} />
            <Route path="/subject/:id" element={<SubjectPage />} />
          </Route>
          <Route
            element={<ProtectedRoute isAllowed={!isAuth} redirect={"/"} />}
          >
            <Route path="/auth" element={<AuthPage />} />
          </Route>
          <Route element={<ProtectedRoute isAllowed={isAuth} redirect={"/"} />}>
            <Route path="/create_subject" element={<SubjectCreationPage />} />
            <Route path="/create_group" element={<GroupCreationPage />} />
            <Route path="/create_student" element={<StudentCreationPage />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
