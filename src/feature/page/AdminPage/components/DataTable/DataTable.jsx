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
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { getListUserAdminPage } from "../../../../../services/AdminPage/GetlistAPI";
import { TABS } from "../../constants/constants";
import { DialogAdd } from "../DialogAdd/DialogAdd";
import { DialogDelete } from "../DialogDelete/DialogDelete";
import { DialogEdit } from "../DialogEdit/DialogEdit";
import DataListTable from "./DataListTable";

const DataTable = () => {
  const [openDelete, setOpenDelete] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openAdd, setOpenAdd] = useState(false);
  const [activeTab, setActiveTab] = useState("all");
  const [dataTable, setDataTable] = useState([]);
  const [selectedId, setSelectedId] = useState(0);

  const handleTabChange = (value) => {
    setActiveTab(value);
  };

  const { data: userList, loading: userListLoading } = useQuery(
    "userList",
    () => getListUserAdminPage.getListUser(localStorage.getItem("accessToken")),
    { fetchPolicy: "network-only" },
    { enabled: activeTab === "all" }
  );

  const { data: studentList, loading: studentListLoading } = useQuery(
    "studentList",
    () =>
      getListUserAdminPage.getListStudent(localStorage.getItem("accessToken")),
    { enabled: activeTab === "student" }
  );

  const { data: teacherList, loading: teacherListLoading } = useQuery(
    "teacherList",
    () =>
      getListUserAdminPage.getListTeacher(localStorage.getItem("accessToken")),
    { enabled: activeTab === "teacher" }
  );

  useEffect(() => {
    if (userList && activeTab === "all") {
      setDataTable(userList.data.data);
    }
    if (studentList && activeTab === "student") {
      setDataTable(studentList.data.data);
    }
    if (teacherList && activeTab === "teacher") {
      setDataTable(teacherList.data.data);
    }
  }, [activeTab, studentList, teacherList, userList]);

  const handleDelete = () => setOpenDelete(!openDelete);
  const handleOpenEdit = () => setOpenEdit(!openEdit);
  const handleOpenAdd = () => setOpenAdd(!openAdd);

  return (
    <>
      <Card className="h-full w-full">
        <CardHeader floated={false} shadow={false} className="rounded-none">
          <div className="mb-8 flex items-center justify-between gap-8">
            <div>
              <Typography variant="h5" color="blue-gray">
                Users list
              </Typography>
              <Typography color="gray" className="mt-1 font-normal">
                See information about all users
              </Typography>
            </div>
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

            <div className="w-full md:w-72">
              <Input
                label="Search"
                icon={<MagnifyingGlassIcon className="h-5 w-5" />}
              />
            </div>
          </div>
        </CardHeader>
        <CardBody className="max-h-80 overflow-y-auto px-0">
          <DataListTable
            handleOpenEdit={handleOpenEdit}
            handleDelete={handleDelete}
            UserTableData={dataTable}
          />

          <DialogEdit openEdit={openEdit} handleOpenEdit={handleOpenEdit} />
          <DialogDelete open={openDelete} handleOpen={handleDelete} />
          <DialogAdd openAdd={openAdd} handleOpenAdd={handleOpenAdd} />
        </CardBody>

        <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
          <Typography variant="small" color="blue-gray" className="font-normal">
            Page 1 of 10
          </Typography>
          <div className="flex gap-2">
            <Button variant="outlined" size="sm">
              Previous
            </Button>
            <Button variant="outlined" size="sm">
              Next
            </Button>
          </div>
        </CardFooter>
      </Card>
    </>
  );
};

export default DataTable;
