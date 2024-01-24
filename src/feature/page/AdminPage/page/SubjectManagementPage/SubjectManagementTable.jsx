import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { UserPlusIcon } from "@heroicons/react/24/solid";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Input,
  Typography,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import subjectAPI from "../../../../../services/AdminPage/SubjectAPI";
import { CustomToastContainer } from "../../../../../utils/toastElement";
import SubjectManagementDataTable from "./components/DataTable/SubjectManagementDataTable";
import { SubjectManagemenDialogAdd } from "./components/DialogAdd/SubjectManagemenDialogAdd";
import { SubjectManagementDialogDelete } from "./components/DialogDelete/SubjectManagementDialogDelete";
import { SubjectManagementDialogEdit } from "./components/DialogEdit/SubjectManagementDialogEdit";

const SubjectManagementTable = () => {
  const [openDelete, setOpenDelete] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openAdd, setOpenAdd] = useState(false);
  const [dataTable, setDataTable] = useState([]);
  const [selectedId, setSelectedId] = useState(0);

  const { data: subjectList, loading: subjectListLoading } = useQuery(
    "subjectList",
    () => subjectAPI.subjects(),
    { fetchPolicy: "network-only" }
  );

  useEffect(() => {
    if (subjectList) {
      setDataTable(subjectList.data.data);
    }
  }, [subjectList]);

  const handleOpenDelete = (id) => {
    setOpenDelete(!openDelete);
    setSelectedId(id);
  };

  const handleDelete = async () => {
    const id = String(selectedId);
    console.log("id", id);
    try {
      await subjectAPI.deleteSubject(id);
    } catch (error) {
      console.log(error);
    } finally {
      setOpenDelete(false);
      toast("Subject deleted successfully!");
    }
  };

  const handleOpenEdit = (id) => setOpenEdit(!openEdit);
  const handleOpenAdd = () => setOpenAdd(!openAdd);

  return (
    <>
      <Card className="h-full w-full">
        <CardHeader floated={false} shadow={false} className="rounded-none">
          <div className="mb-4 flex items-center justify-between gap-8">
            <div>
              <Typography variant="h5" color="blue-gray">
                Subject list
              </Typography>
              <Typography color="gray" className="mt-1 font-normal">
                See information about all classes
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
            <div>
              <Button
                className="flex items-center gap-3"
                size="sm"
                onClick={handleOpenAdd}
              >
                <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Add Subject
              </Button>
            </div>
          </div>
        </CardHeader>

        <CardBody className="max-h-[490px] overflow-y-auto px-0">
          <SubjectManagementDataTable
            handleOpenEdit={handleOpenEdit}
            handleDelete={handleOpenDelete}
            O
            UserTableData={dataTable}
          />

          <SubjectManagementDialogEdit
            openEdit={openEdit}
            handleOpenEdit={handleOpenEdit}
          />
          <SubjectManagementDialogDelete
            open={openDelete}
            handleOpen={handleOpenDelete}
            handleDelete={handleDelete}
          />
          <SubjectManagemenDialogAdd
            openAdd={openAdd}
            handleOpenAdd={handleOpenAdd}
          />
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
      <CustomToastContainer />
    </>
  );
};

export default SubjectManagementTable;
