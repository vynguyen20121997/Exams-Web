import { Button, Typography } from "@material-tailwind/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import ExamsByClass from "./ExamsByClass/ExamsByClass";
import FilterExams from "./ExamsByClass/components/FilterExams";

const ExamsManagement = () => {
  const navigate = useNavigate();
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
            <FilterExams />
            <Button
              onClick={() => navigate("/teacher/create-exams")}
              size="md"
              variant="gradient"
            >
              Create Exams
            </Button>
          </div>
        </div>

        <div className="min-h-[420px] overflow-auto	 max-h-[600px]	">
          <div className="h-[420px]">
            <ExamsByClass />
          </div>
        </div>
      </div>
    </>
  );
};

export default ExamsManagement;
