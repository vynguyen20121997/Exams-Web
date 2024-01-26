// import lazyWithRetry from "../utils/lazyWithRetry";
import { wrapCreateBrowserRouter } from "@sentry/react";
import { createBrowserRouter } from "react-router-dom";
import { AUTH_ROLES } from "../constants/enums";
import { PATHS } from "../constants/urls";
import ClassManagementPage from "../feature/page/AdminPage/page/ClassManagementPage/ClassManagementPage";
import SubjectManagementPage from "../feature/page/AdminPage/page/SubjectManagementPage/SubjectManagementPage";
import UserManagementPage from "../feature/page/AdminPage/page/UserManagementPage/UserManagementPage";
import ForgotPassPage from "../feature/page/StartingPage/ForgotPassPage/ForgotPassPage";
import LoginRegisterPage from "../feature/page/StartingPage/Login_RegisterPage/LoginRegisterPage";
import ResetPassPage from "../feature/page/StartingPage/ResetPassPage/ResetPassPage";
import StudentPage from "../feature/page/StudentPage/StudentPage";
import DoingTestPage from "../feature/page/StudentPage/Tabs/DoingTestPage/DoingTestPage";
import SubmitTestPage from "../feature/page/StudentPage/Tabs/DoingTestPage/SubmitTestPage";
import CreateExamsPage from "../feature/page/TeacherPage/Tabs/TestManagement/CreateExamsPage/CreateExamsPage";
import ExamsDetailPage from "../feature/page/TeacherPage/Tabs/TestManagement/TestDetailIPage/TestDetailIPage";
import TeacherPage from "../feature/page/TeacherPage/TeacherPage";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import PublicRoute from "./PublicRoute/PublicRoute";
import WebExamsLogo from "../assets/Logo/WebExamsLogo";

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
      {
        path: "he",
        element: <WebExamsLogo />,
      },
    ],
  },
  {
    element: <PrivateRoute />,
    children: [
      {
        path: PATHS.admin_home,
        element: <UserManagementPage />,
        handle: {
          roles: [AUTH_ROLES.ADMIN],
        },
      },
      {
        path: PATHS.admin_class_management,
        element: <ClassManagementPage />,
        handle: {
          roles: [AUTH_ROLES.ADMIN],
        },
      },
      {
        path: PATHS.admin_subject_managment,
        element: <SubjectManagementPage />,
        handle: {
          roles: [AUTH_ROLES.ADMIN],
        },
      },
      {
        path: PATHS.teacher_home,
        element: <TeacherPage />,
        handle: {
          roles: [AUTH_ROLES.TEACHER],
        },
      },
      {
        path: PATHS.teacher_create_exams,
        element: <CreateExamsPage />,
        handle: {
          roles: [AUTH_ROLES.TEACHER],
        },
      },
      {
        path: PATHS.teacher_exams_detail,
        element: <ExamsDetailPage />,
        handle: {
          roles: [AUTH_ROLES.TEACHER],
        },
      },
      {
        path: PATHS.student_home,
        element: <StudentPage />,
        handle: {
          roles: [AUTH_ROLES.STUDENT],
        },
      },
      {
        path: PATHS.student_testing,
        element: <DoingTestPage />,
        handle: {
          roles: [AUTH_ROLES.STUDENT],
        },
      },
      {
        path: PATHS.student_submit_testing,
        element: <SubmitTestPage />,
        handle: {
          roles: [AUTH_ROLES.STUDENT],
        },
      },
    ],
  },
]);

export default router;
