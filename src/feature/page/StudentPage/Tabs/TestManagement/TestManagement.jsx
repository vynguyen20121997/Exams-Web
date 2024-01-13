import { Typography } from "@material-tailwind/react";
import React from "react";
import ExamsCardData from "./components/ExamsByClass";
import StudentPageFilterExams from "./components/FilterExams";

const TestManagement = () => {
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
            <ExamsCardData />
          </div>
          <div className="h-[420px] pt-20">
            <ExamsCardData />
          </div>
        </div>
      </div>
    </>
  );
};

export default TestManagement;
