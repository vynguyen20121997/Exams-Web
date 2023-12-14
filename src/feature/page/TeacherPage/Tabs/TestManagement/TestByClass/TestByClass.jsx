import React from "react";
import { TestCard } from "../../../components/CardHolder/Card";
import { SimplePagination } from "../../../components/Pagination/Pagination";

const TestByClass = () => {
  return (
    <>
      <div>
        <TestCard />
      </div>
      <div className="float-right py-6">
        <SimplePagination />
      </div>
    </>
  );
};

export default TestByClass;
