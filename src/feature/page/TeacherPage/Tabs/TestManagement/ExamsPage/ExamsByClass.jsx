import { Typography } from "@material-tailwind/react";
import React from "react";
import { Pagination } from "../../../../../../components/Pagination/Pagination";
import { TestCard } from "../../../components/CardHolder/Card";

const ExamsByClass = ({
  allTestList,
  page,
  onChangePagtination,
  totalPage,
}) => {
  return (
    <>
      <div>
        <Typography variant="h4" color="gray" className="font-small pb-4 ml-4">
          Test in January:
        </Typography>
      </div>
      <div className="flex justify-start	px-10 overflow-x">
        <TestCard allTestList={allTestList} />
      </div>
      <div className="float-right py-6">
        <Pagination
          page={page}
          onChangePagtination={onChangePagtination}
          totalSize={totalPage}
        />
      </div>
    </>
  );
};

export default ExamsByClass;
