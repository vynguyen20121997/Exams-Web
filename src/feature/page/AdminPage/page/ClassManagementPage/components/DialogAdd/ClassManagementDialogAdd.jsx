import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Input,
} from "@material-tailwind/react";
import { useFormik } from "formik";
import React, { useState } from "react";
import ClassAPI from "../../../../../../../services/AdminPage/ClassAPI";
import { addClassInitialValue } from "../../../../constants/constants";
import { AddClassValidationSchema } from "../../../../validations/admin-page-schema";
import { CustomToastContainer } from "../../../../../../../utils/toastElement";
import { toast } from "react-toastify";

export const ClassManagementDialogAdd = ({ openAdd, handleOpenAdd }) => {
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: addClassInitialValue,
    validationSchema: AddClassValidationSchema,

    onSubmit: async (values) => {
      const payload = { title: values.class };
      try {
        setLoading(true);
        await ClassAPI.createClass(payload);
      } catch (error) {
        console.log("response", error);
      } finally {
        setLoading(false);
        resetForm();
        handleOpenAdd();
        toast("Class created successfully!");
      }
    },
  });
  const { handleSubmit, handleChange, resetForm } = formik;

  return (
    <>
      <Dialog open={openAdd} handler={handleOpenAdd}>
        <DialogHeader>Add Class</DialogHeader>
        <DialogBody className="flex flex-col gap-4">
          <Input
            label="Class Name"
            id="class"
            name="class"
            onChange={handleChange}
            size="lg"
          />
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            onClick={handleOpenAdd}
            color="red"
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button
            variant="gradient"
            color="green"
            onClick={() => handleSubmit()}
          >
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
      <CustomToastContainer />
    </>
  );
};
