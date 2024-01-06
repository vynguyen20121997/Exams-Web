import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
} from "@material-tailwind/react";
import React from "react";

export const SubjectManagementDialogDelete = ({
  open,
  handleOpen,
  handleDelete,
}) => {
  return (
    <>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Are you sure to delete this user?</DialogHeader>
        <DialogBody>
          The key to more success is to have a lot of pillows. Put it this way,
          it took me twenty five years to get these plants, twenty five years of
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            onClick={handleOpen}
            color="red"
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleDelete}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
};
