import { ProgressBar } from "../../../components/PrgressBar/ProgressBar";
import { Button } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const ReviewingDoingTestPage = () => {
  const testResourceAPI = useSelector((state) => state.test.fetchTestResources);

  const minutes = testResourceAPI.time;

  const [time, setTime] = useState(minutes * 60);

  const tick = () => {
    setTime(time - 1);
  };

  useEffect(() => {
    const interval = setInterval(tick, 60000 / minutes);
    return () => clearInterval(interval);
  }, [time]);

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
      <div>{(time / 60).toFixed(1)} Minute</div>
    </div>
  );
};

export default ReviewingDoingTestPage;
