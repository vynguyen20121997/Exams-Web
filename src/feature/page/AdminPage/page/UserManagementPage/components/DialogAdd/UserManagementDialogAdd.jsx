import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Input,
  Option,
  Select,
} from "@material-tailwind/react";
import { useFormik } from "formik";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import ClassAPI from "../../../../../../../services/AdminPage/ClassAPI";
import subjectAPI from "../../../../../../../services/AdminPage/SubjectAPI";
import AuthAPI from "../../../../../../../services/StartingPage/AuthAPI";
import { AddUserInitialValues } from "../../../../constants/constants";
import { AddUserValidationSchema } from "../../../../validations/admin-page-schema";
import { CustomToastContainer } from "../../../../../../../utils/toastElement";

export const UserManagementDialogAdd = ({
  openAdd,
  handleOpenAdd,
  classList,
  subjectList,
}) => {
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: AddUserInitialValues,
    validationSchema: AddUserValidationSchema,

    onSubmit: async (values) => {
      if (values.role === "student") {
        const payload = {
          name: values.name,
          role: values.role,
          email: values.email,
          username: values.username,
          password: "12345678",
          classId: values.class,
        };
        try {
          setLoading(true);
          await AuthAPI.register(payload);
        } catch (error) {
        } finally {
          resetForm();
          setLoading(false);
          toast("User created successfully!");
        }
      }
      if (values.role === "teacher") {
        const payLoad = {
          name: values.name,
          role: values.role,
          email: values.email,
          username: values.username,
          password: "12345678",
          subject: values.subject,
        };
        try {
          setLoading(true);
          await AuthAPI.register(payLoad);
        } catch (error) {
        } finally {
          resetForm();
          setLoading(false);
          handleOpenAdd();
          toast("User created successfully!");
        }
      }
    },
  });
  const {
    handleSubmit,
    handleChange,
    setFieldValue,
    setFieldTouched,
    values,
    resetForm,
  } = formik;

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

          {values.role !== "" && values.role === "teacher" && (
            <Select
              label="Which subject are you teaching?"
              id="subject"
              name="subject"
              onChange={(value) => setFieldValue("subject", value)}
              onBlur={() => setFieldTouched("subject", true)}
            >
              {subjectList?.data.data.map((item) => (
                <Option value={item._id} label="student">
                  {item.title}
                </Option>
              ))}
            </Select>
          )}

          {values.role !== "" && values.role === "student" && (
            <Select
              label="Which class are you in?"
              id="class"
              name="class"
              onChange={(value) => setFieldValue("class", value)}
              onBlur={() => setFieldTouched("class", true)}
            >
              {classList?.data.data.map((item) => (
                <Option value={item._id} label="class">
                  {item.title}
                </Option>
              ))}
            </Select>
          )}

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
            value="123456789"
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
