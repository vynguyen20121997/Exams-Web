import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

export function NotificationDialog({ open, handleOpen, score }) {
  const navigate = useNavigate();
  return (
    <>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>
          <Typography variant="h5" color="blue-gray">
            Score!
          </Typography>
        </DialogHeader>
        <DialogBody divider className="grid place-items-center gap-4">
          <Typography color="red" variant="h2">
            {score}
          </Typography>
          <Typography color="red" variant="h4">
            Congratulation!
          </Typography>
          <Typography className="text-center font-normal">
            This is your score
          </Typography>
        </DialogBody>
        <DialogFooter className="space-x-2">
          <Button variant="text" color="blue-gray" onClick={handleOpen}>
            close
          </Button>
          <Button variant="gradient" onClick={() => navigate("/student")}>
            Ok, Got it
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
