import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./feature/page/StartingPage/LoginPage";
import ForgotPassPage from "./feature/page/StartingPage/ForgotPassPage";
import ResetPassPage from "./feature/page/StartingPage/ResetPassPage";
import AdminPage from "./feature/page/AdminPage/AdminPage";

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path='/' element={<SiteLayout />}> */}
        {/* <Route index element={<ProtectedRoute component={Home} />} /> */}
        {/* <Route
          path='profile'
          element={<ProtectedRoute component={Profile} />}
        /> */}
        <Route path="" element={<LoginPage />} />
        <Route path="forgot-password" element={<ForgotPassPage />} />
        <Route path="reset-password" element={<ResetPassPage />} />
        <Route path="admin" element={<AdminPage />} />
      </Routes>
    </Router>
  );
}

export default App;
