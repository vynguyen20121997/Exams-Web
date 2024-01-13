import React from "react";

import { Typography } from "@material-tailwind/react";
import { StudentPagePagination } from "../../../components/Pagination/Pagination";
import { StudentTestCard } from "../../../components/CardHolder/Card";

const ExamsCardData = () => {
  return (
    <>
      <div>
        <Typography variant="h4" color="gray" className="font-small pb-4 ml-4">
          Test in January:
        </Typography>
      </div>
      <div className="flex justify-between	 px-10 overflow-x">
        <StudentTestCard />
      </div>
      <div className="float-right py-6">
        <StudentPagePagination />
      </div>
    </>
  );
};

export default ExamsCardData;
