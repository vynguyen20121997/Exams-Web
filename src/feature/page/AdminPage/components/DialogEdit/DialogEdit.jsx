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
import AuthAPI from "../../../../../services/AuthAPI";

export const DialogEdit = ({ openEdit, handleOpenEdit }) => {
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      role: "",
    },
    onSubmit: async (values) => {
      console.log("values", values);
      try {
        setLoading(true);
        const response = await AuthAPI.register(values);
        console.log("response", response);
      } catch (error) {
        console.log("error", error);
      } finally {
        setLoading(false);
      }
    },
  });
  const { handleSubmit, handleChange, setFieldValue, setFieldTouched } = formik;
  return (
    <>
      <Dialog open={openEdit} handler={handleOpenEdit}>
        <DialogHeader>Editing user</DialogHeader>
        <DialogBody className="flex flex-col gap-4">
          <Input
            label="Name"
            id="name"
            name="name"
            onChange={handleChange}
            size="lg"
          />

          <Select
            label="Role"
            id="role"
            name="role"
            onChange={(value) => setFieldValue("role", value)}
            onBlur={() => setFieldTouched("role", true)}
          >
            <Option value="student" label="student">
              Student
            </Option>
            <Option value="teacher" label="teacher">
              Teacher
            </Option>
          </Select>
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
            color="green"
            onClick={(() => handleSubmit, handleOpenEdit)}
          >
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
};
