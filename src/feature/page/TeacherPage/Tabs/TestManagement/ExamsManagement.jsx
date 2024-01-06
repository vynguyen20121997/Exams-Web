import React from "react";
import { Typography } from "@material-tailwind/react";
import ExamsByClass from "./ExamsByClass/ExamsByClass";
import FilterExams from "./ExamsByClass/components/FilterExams";
import AddDialogExams from "./ExamsByClass/components/AddDialogExams";

const ExamsManagement = () => {
  return (
    <>
      <div className="px-10">
        <div className="pb-5 flex justify-between">
          <div>
            <Typography variant="h3" color="blue-gray" className="font-small">
              All Test
            </Typography>
          </div>
          <div className="flex ">
            <FilterExams />
            <AddDialogExams />
          </div>
        </div>

        <div className="h-[420px]">
          <ExamsByClass />
        </div>
      </div>
    </>
  );
};

export default ExamsManagement;
