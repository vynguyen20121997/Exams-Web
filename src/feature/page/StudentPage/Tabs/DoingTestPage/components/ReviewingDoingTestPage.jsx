import React from "react";
import { ProgressBar } from "../../../components/PrgressBar/ProgressBar";
import { Button } from "@material-tailwind/react";

const ReviewingDoingTestPage = () => {
  return (
    <div className="grid grid-cols-7 gap-4">
      <div>Test Name</div>
      <div className="col-span-4 self-center">
        <ProgressBar size="lg" />
      </div>
      <div>
        <Button className="rounded-full" size="sm" color="purple">
          Review
        </Button>
      </div>
      <div>00.00 Time Left</div>
    </div>
  );
};

export default ReviewingDoingTestPage;
