import React from "react";
import SubjectManagementTable from "./components/DataTable/SubjectManagementTable";
import AdminPageLayout from "./components/Layout/layout";

const SubjectManagementPage = () => {
  return (
    <AdminPageLayout>
      <SubjectManagementTable />
    </AdminPageLayout>
  );
};

export default SubjectManagementPage;
