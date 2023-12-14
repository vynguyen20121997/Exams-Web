import React from "react";
import TestByClass from "./TestByClass/TestByClass";
import { Typography } from "@material-tailwind/react";
import TestByCollection from "./Test By Collecton/TestByCollection";

const TestManagement = () => {
  return (
    <>
      <div className="px-10">
        <div className=" pb-3">
          <div className="pb-5">
            <Typography variant="h4" color="blue-gray" className="font-small">
              {" "}
              //Topic// Test by Class
            </Typography>
          </div>
          <div>
            <TestByClass />
          </div>
        </div>

        <div className=" pb-10">
          <div className="pb-5">
            <Typography variant="h4" color="blue-gray" className="font-small">
              {" "}
              //Topic// Test by Collection
            </Typography>
          </div>
          <div>
            <TestByCollection />
          </div>
        </div>
      </div>{" "}
    </>
  );
};

export default TestManagement;
