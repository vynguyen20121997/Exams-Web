import React, { useEffect, useState } from "react";

import { Typography } from "@material-tailwind/react";
import { StudentPagePagination } from "../../../components/Pagination/Pagination";
import { StudentTestCard } from "../../../components/CardHolder/Card";

const ExamsCardData = ({ studentAllTestList }) => {
  const [studentTestData, setStudentTestData] = useState([]);
  useEffect(() => {
    if (studentAllTestList) {
      setStudentTestData(studentAllTestList.data.data);
    }
  }, [studentAllTestList]);

  return (
    <>
      <div>
        <Typography variant="h4" color="gray" className="font-small pb-4 ml-4">
          Test in January:
        </Typography>
      </div>
      <div className="flex justify-start	 px-10 overflow-x">
        <StudentTestCard studentTestData={studentTestData} />
      </div>
      <div className="float-right py-6">
        <StudentPagePagination />
      </div>
    </>
  );
};

export default ExamsCardData;
