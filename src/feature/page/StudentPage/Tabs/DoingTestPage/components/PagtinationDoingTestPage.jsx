import React from "react";
import { Pagination } from "../../../../../../components/Pagination/Pagination";
import { Button } from "@material-tailwind/react";

const PagtinationDoingTestPage = ({
  page,
  onChangePagtination,
  totalPages,
  Onfinish,
}) => {
  return (
    <div className="flex justify-center">
      <div className="self-center">
        <Pagination
          page={page}
          onChangePagtination={onChangePagtination}
          totalSize={totalPages}
        />
      </div>
      <div className="ml-20 ">
        <Button className="rounded-full" size="md" onClick={Onfinish}>
          Finish
        </Button>
      </div>
    </div>
  );
};

export default PagtinationDoingTestPage;
