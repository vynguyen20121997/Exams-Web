import { Button, Typography } from "@material-tailwind/react";
import { useQuery } from "react-query";
import { getListUserTeacherPage } from "../../../../../../services/TeacherPage/GetListUserAPI";
import TeacherPageLayout from "../../../components/Layout/layout";
import TestDetailDataStudent from "./components/TestDetailDataStudent";
import { TestDetailDataTable } from "./components/TestDetailDataTable";
import TestDetailInfomation from "./components/TestDetailInfomation";
import { TestDetailListTopic } from "./components/TestDetailListTopic";
// import ClassAPITeacherPage from "../../../../../../services/TeacherPage/ClassAPI";

const ExamsDetailPage = () => {
  const { data: studentList, loading: studentListLoading } = useQuery(
    "studentList",
    () => getListUserTeacherPage.getListStudent(),
    { fetchPolicy: "network-only" }
  );

  // const { data: classList, loading: classListLoading } = useQuery(
  //   "classList",
  //   () => ClassAPITeacherPage.classes(),
  //   { fetchPolicy: "network-only" }
  // );

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
            <TestDetailListTopic />
          </div>
          <div>
            <TestDetailInfomation />
          </div>
          <div>
            <TestDetailDataStudent studentList={studentList} />
          </div>
        </div>
        <div>
          <TestDetailDataTable />
        </div>
      </div>
    </TeacherPageLayout>
  );
};

export default ExamsDetailPage;
