import React from "react";
import { TestCard } from "../../../components/CardHolder/Card";
import { SimplePagination } from "../../../components/Pagination/Pagination";
import { Typography } from "@material-tailwind/react";

const ExamsByClass = () => {
  return (
    <>
      <div>
        <Typography variant="h4" color="gray" className="font-small pb-4 ml-4">
          Test in January:
        </Typography>
      </div>
      <div className="flex justify-between	 px-10 overflow-x">
        <TestCard />
      </div>
      <div className="float-right py-6">
        <SimplePagination />
      </div>
    </>
  );
};

export default ExamsByClass;
