import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AuthPage from "./pages/AuthPage";
import MainPage from "./pages/MainPage";
import ProtectedRoute from "./utils/ProtectedRoute";

function App() {
  const isAuth = true;
  return (
    <div className="App w-full">
      <Routes>
        <Route element={<Navbar />}>
          <Route
            element={<ProtectedRoute isAllowed={isAuth} redirect={"/auth"} />}
          >
            <Route path="/" element={<MainPage />} />
          </Route>
          <Route
            element={<ProtectedRoute isAllowed={!isAuth} redirect={"/"} />}
          >
            <Route path="/auth" element={<AuthPage />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
