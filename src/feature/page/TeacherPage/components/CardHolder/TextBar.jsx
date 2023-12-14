import {
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import React from "react";

export const HightlightBar = ({ highLighttext }) => {
  return (
    <Card className="mt-6 w-fit" color="purple">
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="">
          {highLighttext}
        </Typography>
      </CardBody>
    </Card>
  );
};
