import React from "react";
import StudentPageLayout from "./components/Layout/layout";
import TestManagement from "./Tabs/TestManagement/TestManagement";

const StudentPage = () => {
  return (
    <StudentPageLayout>
      <TestManagement />
    </StudentPageLayout>
  );
};

export default StudentPage;
