import { Typography } from "@material-tailwind/react";
import React from "react";
import { Pagination } from "../../../../../../components/Pagination/Pagination";
import { TestCard } from "../../../components/CardHolder/Card";

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
        <Pagination />
      </div>
    </>
  );
};

export default ExamsByClass;
