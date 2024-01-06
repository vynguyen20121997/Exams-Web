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
import ClassAPI from "../../../../../../../services/AdminPage/ClassAPI";
import { generateUserPayload } from "../../../../../../../untils/generatorUserPayload";
import { UserAPI } from "../../../../../../../services/AdminPage/UserAPI";
import subjectAPI from "../../../../../../../services/AdminPage/SubjectAPI";
import { AddUserInitialValues } from "../../../../constants/constants";
import { AddUserValidationSchema } from "../../../../validations/admin-page-schema";

export const UserManagementDialogAdd = ({ openAdd, handleOpenAdd }) => {
  const [loading, setLoading] = useState(false);

  const { data: classList } = useQuery(
    "class",
    () => ClassAPI.classes(),
    { refetchOnChange: false },
    { refetchOnMount: false }
  );

  const { data: teacherList } = useQuery(
    "teacherList",
    () => subjectAPI.subjects(),
    { refetchOnChange: false },
    { refetchOnMount: false }
  );

  const formik = useFormik(
    {
      initialValues: AddUserInitialValues,
      validationSchema: AddUserValidationSchema,

      onSubmit: async (values) => {
        const payload = await generateUserPayload(values, classList);
        try {
          setLoading(true);
          const response = await UserAPI.register(payload);
          console.log("response", response);
        } catch (error) {
          console.log("response", error);
        } finally {
          setLoading(false);
          resetForm();
          handleOpenAdd();
        }
      },
    }
    // }
  );
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
              {teacherList.map((item) => (
                <Option value={item.subjectValue} label="student">
                  {item.subjectName}
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
                <Option value={item.title} label="class">
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
    </>
  );
};
