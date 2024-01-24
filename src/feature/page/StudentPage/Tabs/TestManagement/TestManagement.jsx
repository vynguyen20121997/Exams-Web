import { Typography } from "@material-tailwind/react";
import React from "react";
import ExamsCardData from "./components/ExamsByClass";
import StudentPageFilterExams from "./components/FilterExams";
import { useQuery } from "react-query";
import testAPI from "../../../../../services/StudentPage/TestAPI";

const TestManagement = () => {
  const { data: studentAllTestList } = useQuery(
    "studentTestList",
    () => testAPI.tests({ limit: 1, page: 1 }),
    {
      fetchPolicy: "network-only",
    }
  );

  return (
    <>
      <div className="px-10 ">
        <div className="pb-5 flex justify-between">
          <div>
            <Typography variant="h3" color="blue-gray" className="font-small">
              All Test
            </Typography>
          </div>
          <div className="flex ">
            <StudentPageFilterExams />
          </div>
        </div>

        <div className="min-h-[420px] overflow-auto	 max-h-[600px]	">
          <div className="h-[420px]">
            <ExamsCardData studentAllTestList={studentAllTestList} />
          </div>
        </div>
      </div>
    </>
  );
};

export default TestManagement;
