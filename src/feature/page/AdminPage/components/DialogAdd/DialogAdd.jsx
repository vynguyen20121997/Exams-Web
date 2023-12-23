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
import AuthAPI from "../../../../../services/StartingPage/AuthAPI";

export const DialogAdd = ({ openAdd, handleOpenAdd }) => {
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      role: "",
      username: "",
      password: "",
      reenterpassword: "",
    },
    // validationSchema: RegisterValidationSchema,
    onSubmit: async (values) => {
      console.log("values", values);
      try {
        setLoading(true);
        const response = await AuthAPI.register(values);
        console.log("response", response);
      } catch (error) {
        console.log("response", error);
      } finally {
        setLoading(false);
      }
    },
  });
  const { handleSubmit, handleChange, setFieldValue, setFieldTouched } = formik;

  return (
    <>
      <Dialog open={openAdd} handler={handleOpenAdd}>
        <DialogHeader>Add user</DialogHeader>
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

          <Input
            label="Email"
            id="email"
            name="email"
            onChange={handleChange}
            size="lg"
          />
          <Input
            label="Username"
            id="username"
            name="username"
            onChange={handleChange}
            size="lg"
          />
          <Input
            label="Password"
            id="password"
            name="password"
            type="password"
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
            onClick={(() => handleSubmit, handleOpenAdd)}
          >
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
};
