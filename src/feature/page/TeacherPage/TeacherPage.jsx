import React from "react";
import { SimpleFooter } from "../../../components/Footer/Footer";
import { TeacherHeader } from "./components/TeacherHeader/TeacherHeader";
import TestManagement from "./Tabs/TestManagement/TestManagement";

const TeacherPage = () => {
  return (
    <div className="background-website-admin">
      <div className="bg-white w-11/12 mx-auto rounded-3xl pb-5 ">
        <TeacherHeader />

        <div className="py-10">
          <TestManagement />
        </div>

        <SimpleFooter />
      </div>
    </div>
  );
};

export default TeacherPage;
