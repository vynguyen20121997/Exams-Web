import React from "react";
import { Typography } from "@material-tailwind/react";
import ExamsByClass from "./ExamsByClass/ExamsByClass";
import FilterExams from "./ExamsByClass/components/FilterExams";
import AddDialogExams from "./ExamsByClass/components/AddDialogExams";

const ExamsManagement = () => {
  return (
    <>
      <div className="px-10">
        <div className=" pb-3">
          <div className="pb-5 flex justify-between">
            <div>
              <Typography variant="h4" color="blue-gray" className="font-small">
                Test by Class
              </Typography>
            </div>
            <div className="flex ">
              <FilterExams />
              <AddDialogExams />
            </div>
          </div>
          <div>
            {" "}
            <ExamsByClass />
          </div>
        </div>

        <div className=" pb-10">
          <div className="pb-5">
            <Typography variant="h4" color="blue-gray" className="font-small">
              {" "}
              Test by Collection
            </Typography>
          </div>
          <div>{/* <ExamsByClass /> */}</div>
        </div>
      </div>{" "}
    </>
  );
};

export default ExamsManagement;
