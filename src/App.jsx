import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import ForgotPassPage from "./feature/page/StartingPage/ForgotPassPage/ForgotPassPage";
import ResetPassPage from "./feature/page/StartingPage/ResetPassPage/ResetPassPage";
import AdminPage from "./feature/page/AdminPage/AdminPage";
import LoginRegisterPage from "./feature/page/StartingPage/Login_RegisterPage/Login_RegisterPage";
import TeacherPage from "./feature/page/TeacherPage/TeacherPage";
import { TeacherHeader } from "./feature/page/TeacherPage/components/TeacherHeader/TeacherHeader";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="" element={<LoginRegisterPage />} />
        <Route path="forgot-password" element={<ForgotPassPage />} />
        <Route path="reset-password" element={<ResetPassPage />} />
        <Route path="admin" element={<AdminPage />} />
        <Route path="teacher" element={<TeacherPage />} />
      </Routes>
    </Router>
  );
}

export default App;
