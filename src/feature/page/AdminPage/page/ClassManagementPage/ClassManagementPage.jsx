import React from "react";
import AdminPageLayout from "../../components/Layout/layout";
import ClassManagementTable from "./ClassManagementTable";

const ClassManagementPage = () => {
  return (
    <AdminPageLayout>
      <ClassManagementTable />
    </AdminPageLayout>
  );
};

export default ClassManagementPage;
