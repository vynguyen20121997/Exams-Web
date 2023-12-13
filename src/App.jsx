import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import ForgotPassPage from "./feature/page/StartingPage/ForgotPassPage/ForgotPassPage";
import ResetPassPage from "./feature/page/StartingPage/ResetPassPage/ResetPassPage";
import AdminPage from "./feature/page/AdminPage/AdminPage";
import Login_RegisterPage from "./feature/page/StartingPage/Login_RegisterPage/Login_RegisterPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="" element={<Login_RegisterPage />} />
        <Route path="forgot-password" element={<ForgotPassPage />} />
        <Route path="reset-password" element={<ResetPassPage />} />
        <Route path="admin" element={<AdminPage />} />
      </Routes>
    </Router>
  );
}

export default App;
