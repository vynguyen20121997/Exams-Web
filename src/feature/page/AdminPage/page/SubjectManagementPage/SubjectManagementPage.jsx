import React from "react";
import AdminPageLayout from "../../components/Layout/layout";
import SubjectManagementTable from "./SubjectManagementTable";

const SubjectManagementPage = () => {
  return (
    <AdminPageLayout>
      <SubjectManagementTable />
    </AdminPageLayout>
  );
};

export default SubjectManagementPage;
