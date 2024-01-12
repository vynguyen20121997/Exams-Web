import { Button, Typography } from "@material-tailwind/react";
import { useQuery } from "react-query";
import TeacherPageLayout from "../../../components/Layout/layout";
import CreateExamsDataStudent from "./components/CreateExamsDataStudent";
import { CreateExamsDataTable } from "./components/CreateExamsDataTable";
import CreateExamsInfomation from "./components/CreateExamsInfomation";
import { CreateExamsListTopic } from "./components/CreateExamsListTopic";
import { getListUserTeacherPage } from "../../../../../../services/TeacherPage/GetListUserAPI";
import ClassAPITeacherPage from "../../../../../../services/TeacherPage/ClassAPI";

const CreateExamsPage = () => {
  const { data: studentList, loading: studentListLoading } = useQuery(
    "studentList",
    () => getListUserTeacherPage.getListStudent(),
    { fetchPolicy: "network-only" }
  );

  const { data: classList, loading: classListLoading } = useQuery(
    "classList",
    () => ClassAPITeacherPage.classes(),
    { fetchPolicy: "network-only" }
  );

  return (
    <TeacherPageLayout>
      <div className="flex justify-between">
        <div>
          <div className="flex justify-center">
            <Typography
              variant="h4"
              color="black"
              className=" text-black-500 pb-5 "
            >
              SUBJECT NAME
            </Typography>
          </div>
          <div className="pb-3">
            <CreateExamsListTopic classList={classList} />
          </div>
          <div>
            <CreateExamsInfomation />
          </div>
          <div>
            <CreateExamsDataStudent studentList={studentList} />
          </div>
          <div>
            <Button
              className="rounded-lg mt-3 bg-[#cfd8dc] text-slate-800 font-normal  opacity-70"
              fullWidth
            >
              Create exams
            </Button>
          </div>
        </div>
        <div>
          <CreateExamsDataTable />
        </div>
      </div>
    </TeacherPageLayout>
  );
};

export default CreateExamsPage;
