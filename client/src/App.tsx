import React from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import AuthPage from "./pages/AuthPage";
import MainPage from "./pages/MainPage";
import SubjectPage from "./pages/SubjectPage";
import ProtectedRoute from "./utils/ProtectedRoute";
import { RootState } from "./redux/store";
import SubjectCreationPage from "./pages/SubjectCreationPage";
import GroupCreationPage from "./pages/GroupCreationPage";
import StudentCreationPage from "./pages/UserCreationPage";

function App() {
  const isAuth = useSelector((state: RootState) => state.auth.isAuth);
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
