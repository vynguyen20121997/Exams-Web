import React from "react";
import AdminPageLayout from "../../components/Layout/layout";
import UserManagementTable from "./UserManagementTable";

const UserManagementPage = () => {
  return (
    <AdminPageLayout>
      <UserManagementTable />
    </AdminPageLayout>
  );
};

export default UserManagementPage;
