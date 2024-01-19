import React from "react";
import { Pagination } from "../../../../../../components/Pagination/Pagination";
import { Button } from "@material-tailwind/react";

const PagtinationDoingTestPage = () => {
  return (
    <div className="flex justify-center">
      <div className="self-center">
        <Pagination />
      </div>
      <div className="ml-20 ">
        <Button className="rounded-full" size="md">
          Finish
        </Button>
      </div>
    </div>
  );
};

export default PagtinationDoingTestPage;
