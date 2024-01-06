import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
} from "@material-tailwind/react";
import React from "react";

export const UserManagementDialogDelete = ({
  open,
  handleOpen,
  handleDelete,
}) => {
  return (
    <>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Are you sure to delete this user?</DialogHeader>
        <DialogBody>Lorem ipsum dolor sit amet, consectet</DialogBody>
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
