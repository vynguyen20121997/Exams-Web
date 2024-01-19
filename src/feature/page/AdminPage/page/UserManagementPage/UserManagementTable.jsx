import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { UserPlusIcon } from "@heroicons/react/24/solid";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Input,
  Tab,
  Tabs,
  TabsHeader,
  Typography,
} from "@material-tailwind/react";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";

import { UserAPI } from "../../../../../services/AdminPage/UserAPI";
import { TABS } from "../../constants/constants";
import UserManagementDataTable from "./components/DataTable/UserManagementDataTable";
import { UserManagementDialogAdd } from "./components/DialogAdd/UserManagementDialogAdd";
import { UserManagementDialogDelete } from "./components/DialogDelete/UserManagementDialogDelete";
import { UserManagementDialogEdit } from "./components/DialogEdit/UserManagementDialogEdit";
import { CustomToastContainer } from "../../../../../utils/toast";
import { getListUserAdminPage } from "../../../../../services/AdminPage/GetUserAPI";
import { Pagination } from "../../../../../components/Pagination/Pagination";
import ClassAPI from "../../../../../services/AdminPage/ClassAPI";
import subjectAPI from "../../../../../services/AdminPage/SubjectAPI";
import { DEFAULT_PAGE, USER_ROLES } from "./constants/constants";

const UserManagementTable = () => {
  const [openDelete, setOpenDelete] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openAdd, setOpenAdd] = useState(false);
  const [activeTab, setActiveTab] = useState("all");

  const [dataTable, setDataTable] = useState([]);
  const [selectedId, setSelectedId] = useState(0);
  const [page, setPage] = useState(DEFAULT_PAGE);

  const handleTabChange = (value) => {
    setActiveTab(value);
  };

  const { data: userList, loading: userListLoading } = useQuery(
    "userList",
    () => getListUserAdminPage.getListUser({ page }),
    { fetchPolicy: "network-only" },
    { enabled: activeTab === "all" }
  );

  const { data: studentList, loading: studentListLoading } = useQuery(
    "studentList",
    () =>
      getListUserAdminPage.getListUser({
        role: USER_ROLES.STUDENT,
        page,
      }),
    { enabled: activeTab === USER_ROLES.STUDENT }
  );

  const { data: teacherList, loading: teacherListLoading } = useQuery(
    "teacherList",
    () =>
      getListUserAdminPage.getListUser({
        page,
        role: USER_ROLES.TEACHER,
      }),
    { enabled: activeTab === USER_ROLES.TEACHER }
  );

  const { data: classList } = useQuery(
    "class",
    () => ClassAPI.classes(),
    { refetchOnChange: false },
    { refetchOnMount: false }
  );

  const { data: subjectList } = useQuery(
    "subject",
    () => subjectAPI.subjects(),
    { refetchOnChange: false },
    { refetchOnMount: false }
  );

  useEffect(() => {
    if (userList && activeTab === "all") {
      setDataTable(userList.data.data);
    } else if (studentList && activeTab === USER_ROLES.STUDENT) {
      setDataTable(studentList.data.data);
    } else if (teacherList && activeTab === USER_ROLES.TEACHER) {
      setDataTable(teacherList.data.data);
    }
  }, [activeTab, studentList, teacherList, userList]);

  const handleOpenDelete = (id) => {
    setOpenDelete(!openDelete);
    setSelectedId(id);
  };

  const handleDelete = async () => {
    const id = String(selectedId);
    try {
      await UserAPI.delete(id);
    } catch (error) {
      console.log(error);
    } finally {
      setOpenDelete(false);
      toast("User deleted successfully!");
    }
  };

  const handleOpenEdit = (id) => {
    setOpenEdit(!openEdit);
    setSelectedId(id);
  };

  const handleOpenAdd = () => setOpenAdd(!openAdd);

  return (
    <>
      <Card className="h-full w-full">
        <CardHeader floated={false} shadow={false} className="rounded-none">
          <div className="mb-4 flex items-center justify-between gap-8">
            <div>
              <Typography variant="h5" color="blue-gray">
                Users list
              </Typography>
              <Typography color="gray" className="mt-1 font-normal">
                See information about all users
              </Typography>
            </div>
            <div className="w-full md:w-72">
              <Input
                label="Search"
                icon={<MagnifyingGlassIcon className="h-5 w-5" />}
              />
            </div>
          </div>

          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <Tabs className="w-full md:w-max">
              <TabsHeader>
                {TABS.map(({ label, value }, index) => (
                  <Tab
                    key={index}
                    value={value}
                    onClick={() => handleTabChange(value)}
                  >
                    &nbsp;&nbsp;{label}&nbsp;&nbsp;
                  </Tab>
                ))}
              </TabsHeader>
            </Tabs>
            <div>
              <Button
                className="flex items-center gap-3"
                size="sm"
                onClick={handleOpenAdd}
              >
                <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Add member
              </Button>
            </div>
          </div>
        </CardHeader>

        <CardBody className="h-[490px] px-0">
          <UserManagementDataTable
            handleOpenEdit={handleOpenEdit}
            handleOpenDelete={handleOpenDelete}
            UserTableData={dataTable}
          />

          <UserManagementDialogEdit
            subjectList={subjectList}
            classList={classList}
            openEdit={openEdit}
            handleOpenEdit={handleOpenEdit}
            selectedId={selectedId}
          />
          <UserManagementDialogDelete
            open={openDelete}
            handleOpen={handleOpenDelete}
            handleDelete={handleDelete}
          />
          <UserManagementDialogAdd
            subjectList={subjectList}
            classList={classList}
            openAdd={openAdd}
            handleOpenAdd={handleOpenAdd}
          />
        </CardBody>

        <CardFooter className="flex items-center justify-between border-t border-blue-gray-50  py-5">
          <Typography
            variant="small"
            color="blue-gray-200"
            className="font-normal"
          >
            {/* LoremLorem ipsum dolor sit amet, consectetur adipiscing elit. */}
          </Typography>
          <div>
            <Pagination />
          </div>
        </CardFooter>
      </Card>
      <CustomToastContainer />
    </>
  );
};

export default UserManagementTable;
