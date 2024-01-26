import { Button, Typography } from "@material-tailwind/react";
import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FilterExams from "./ExamsPage/components/FilterExams";
import ExamsByClass from "./ExamsPage/ExamsByClass";
import { useQuery } from "react-query";
import testAPI from "../../../../../services/TeacherPage/TestAPI";
import { DEFAULT_PAGE } from "./TestDetailIPage/constants/constants";

const ExamsManagement = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(DEFAULT_PAGE);
  const { data: testsData } = useQuery("tests", () => testAPI.tests(page));
  const [totalPage, setTotalPage] = useState(0);
  const { data: allTestList } = useQuery(
    "allTestList",
    () => testAPI.tests({ limit: 5, page: 1 }),
    { fetchPolicy: "network-only" }
  );

  const onChangePagtination = useCallback(
    (number) => {
      setPage(number);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [page]
  );

  useEffect(() => {
    setTotalPage(testsData && testsData.data.pagination);
  }, [testsData]);

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
            <ExamsByClass
              allTestList={allTestList}
              page={page}
              onChangePagtination={onChangePagtination}
              totalSize={totalPage}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ExamsManagement;
