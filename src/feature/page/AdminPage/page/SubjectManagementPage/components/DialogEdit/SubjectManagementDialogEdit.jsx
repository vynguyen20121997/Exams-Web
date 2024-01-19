import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Select,
  Option,
} from "@material-tailwind/react";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { CustomToastContainer } from "../../../../../../../utils/toast";

export const SubjectManagementDialogEdit = ({ openEdit, handleOpenEdit }) => {
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
    },
    onSubmit: async (values) => {
      try {
        setLoading(true);
        // const response = await AuthAPI.register(values);
      } catch (error) {
      } finally {
        setLoading(false);
        toast("Subject edited successfully!");
      }
    },
  });
  const { handleSubmit, handleChange } = formik;

  console.log("openEdit", openEdit);
  return (
    <>
      <Dialog open={openEdit} handler={handleOpenEdit}>
        <DialogHeader>Editing Subject</DialogHeader>
        <DialogBody className="flex flex-col gap-4">
          <Input
            label="Name Subject"
            id="name"
            name="name"
            onChange={handleChange}
            size="lg"
          />
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            onClick={handleOpenEdit}
            color="red"
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button
            variant="gradient"
            color="purple"
            onClick={(() => handleSubmit, handleOpenEdit)}
          >
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
      <CustomToastContainer />
    </>
  );
};
