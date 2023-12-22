// import lazyWithRetry from "../untils/lazyWithRetry";
import { wrapCreateBrowserRouter } from "@sentry/react";
import { createBrowserRouter } from "react-router-dom";
import { PATHS } from "../constants/urls";
import LoginRegisterPage from "../feature/page/StartingPage/Login_RegisterPage/LoginRegisterPage";
import ForgotPassPage from "../feature/page/StartingPage/ForgotPassPage/ForgotPassPage";
import ResetPassPage from "../feature/page/StartingPage/ResetPassPage/ResetPassPage";
import PublicRoute from "./PublicRoute/PublicRoute";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import AdminPage from "../feature/page/AdminPage/AdminPage";
import TeacherPage from "../feature/page/TeacherPage/TeacherPage";

//Public route
// const Login_RegisterPage = lazyWithRetry(() =>
//   import("feature/page/StartingPage/Login_RegisterPage/Login_RegisterPage")
// );
// const ForgotPassPage = lazyWithRetry(() =>
//   import("feature/page/StartingPage/ForgotPassPage/ForgotPassPage")
// );
// const ResetPassPage = lazyWithRetry(() =>
//   import("feature/page/StartingPage/ResetPassPage/ResetPassPage")
// );

// //Private routes - Teacher route
// const AdminPage = lazyWithRetry(() =>
//   import("feature/page/AdminPage/AdminPage")
// );

// //Private routes - Teacher route
// const TeacherPage = lazyWithRetry(() =>
//   import("feature/page/TeacherPage/TeacherPage")
// );

const sentryCreateBrowserRouter = wrapCreateBrowserRouter(createBrowserRouter);
const router = sentryCreateBrowserRouter([
  {
    path: PATHS.home,
    element: <PublicRoute />,
    children: [
      { path: PATHS.login_register, element: <LoginRegisterPage /> },
      { path: PATHS.forgot_pass, element: <ForgotPassPage /> },
      {
        path: PATHS.reset_password,
        element: <ResetPassPage />,
      },
    ],
  },
  {
    element: <PrivateRoute />,
    children: [
      { path: PATHS.admin_home, element: <AdminPage /> },
      {
        path: PATHS.teacher_home,
        element: <TeacherPage />,
      },
    ],
  },
]);

export default router;
