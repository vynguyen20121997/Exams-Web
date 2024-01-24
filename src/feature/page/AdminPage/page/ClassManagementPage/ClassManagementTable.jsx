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
import { useEffect, useState, useCallback } from "react";
import { useQuery } from "react-query";
import ClassAPI from "../../../../../services/AdminPage/ClassAPI";
import { UserAPI } from "../../../../../services/AdminPage/UserAPI";
import ClassManagementDataTable from "./components/DataTable/ClassManagementDataTable";
import { ClassManagementDialogAdd } from "./components/DialogAdd/ClassManagementDialogAdd";
import { ClassManagementDialogDelete } from "./components/DialogDelete/ClassManagementDialogDelete";
import { ClassManagementDialogEdit } from "./components/DialogEdit/ClassManagementDialogEdit";
import { CustomToastContainer } from "../../../../../utils/toastElement";
import { toast } from "react-toastify";
import { Pagination } from "../../../../../components/Pagination/Pagination";
import { useDispatch, useSelector } from "react-redux";
import {
  DEFAULT_PAGE,
  DEFAULT_TOTAL_PAGE,
} from "../UserManagementPage/constants/constants";

const ClassManagementTable = () => {
  const [openDelete, setOpenDelete] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openAdd, setOpenAdd] = useState(false);
  const [dataTable, setDataTable] = useState([]);
  const [selectedId, setSelectedId] = useState(0);
  const [page, setPage] = useState(DEFAULT_PAGE);
  const [totalPage, setTotalPage] = useState(DEFAULT_TOTAL_PAGE);
  const isDeleteState = useSelector((state) => state.admin.isDelete);
  const isCreateState = useSelector((state) => state.admin.isCreate);

  const { data: classList, loading: classListLoading } = useQuery(
    ["classList", page, isDeleteState, isCreateState],
    () => ClassAPI.classes({ limit: 5, page: page }),
    { fetchPolicy: "network-only" }
  );

  useEffect(() => {
    if (classList) {
      setDataTable(classList.data.data);
      setTotalPage(classList && classList.data.pagination);
    }
  }, [classList]);

  const onChangePagtination = useCallback(
    (number) => {
      setPage(number);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [page]
  );

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
      toast("Class deleted successfully!");
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
                Classes list
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
                <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Add class
              </Button>
            </div>
          </div>
        </CardHeader>

        <CardBody className="max-h-[490px] overflow-y-auto px-0">
          <ClassManagementDataTable
            handleOpenEdit={handleOpenEdit}
            handleDelete={handleOpenDelete}
            UserTableData={dataTable}
          />

          <ClassManagementDialogEdit
            openEdit={openEdit}
            handleOpenEdit={handleOpenEdit}
          />
          <ClassManagementDialogDelete
            open={openDelete}
            handleOpen={handleOpenDelete}
            handleDelete={handleDelete}
          />
          <ClassManagementDialogAdd
            openAdd={openAdd}
            handleOpenAdd={handleOpenAdd}
          />
        </CardBody>

        <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
          <Typography
            variant="small"
            color="blue-gray-200"
            className="font-normal"
          >
            {/* LoremLorem ipsum dolor sit amet, consectetur adipiscing elit. */}
          </Typography>
          <div>
            <Pagination
              page={page}
              onChangePagtination={onChangePagtination}
              totalSize={totalPage}
            />
          </div>
        </CardFooter>
      </Card>
      <CustomToastContainer />
    </>
  );
};

export default ClassManagementTable;
