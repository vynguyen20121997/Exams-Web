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
import subjectAPI from "../../../../../../../services/AdminPage/SubjectAPI";
import { addSubjectInitialValue } from "../../../../constants/constants";
import { AddSubjectValidationSchema } from "../../../../validations/admin-page-schema";

export const SubjectManagemenDialogAdd = ({ openAdd, handleOpenAdd }) => {
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: addSubjectInitialValue,
    validationSchema: AddSubjectValidationSchema,

    onSubmit: async (values) => {
      const payload = {
        variable: values.subject,
      };
      try {
        setLoading(true);
        await subjectAPI.createSubject(payload);
      } catch (error) {
        console.log("response", error);
      } finally {
        setLoading(false);
        resetForm();
        handleOpenAdd();
      }
    },
  });
  const { handleSubmit, handleChange, resetForm } = formik;

  return (
    <>
      <Dialog open={openAdd} handler={handleOpenAdd}>
        <DialogHeader>Add user</DialogHeader>
        <DialogBody className="flex flex-col gap-4">
          <Input
            label="Subject Name"
            id="subject"
            name="subject"
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
    </>
  );
};
