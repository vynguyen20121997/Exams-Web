import React from "react";
import ExamsManagement from "./Tabs/TestManagement/ExamsManagement";
import TeacherPageLayout from "./components/Layout/layout";

const TeacherPage = () => {
  return (
    <TeacherPageLayout>
      <ExamsManagement />
    </TeacherPageLayout>
  );
};

export default TeacherPage;
