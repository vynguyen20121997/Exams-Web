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
import { CustomToastContainer } from "../../../../../../../utils/toast";
import { toast } from "react-toastify";

export const UserManagementDialogEdit = ({
  openEdit,
  handleOpenEdit,
  subjectList,
  classList,
  selectedId,
}) => {
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      role: "",
      subject: "",
      class: "",
    },

    onSubmit: async (values) => {
      try {
        setLoading(true);
      } catch (error) {
      } finally {
        setLoading(false);
        toast("User edited successfully!");
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

          <Select
            label="Subject"
            id="subject"
            name="subject"
            onChange={(value) => setFieldValue("subject", value)}
            onBlur={() => setFieldTouched("subject", true)}
          >
            {subjectList &&
              subjectList.data.data?.map((item) => (
                <Option value={item._id} label="subject">
                  {item.title}
                </Option>
              ))}
          </Select>

          <Select
            label="Class"
            id="class"
            name="class"
            onChange={(value) => setFieldValue("class", value)}
            onBlur={() => setFieldTouched("class", true)}
          >
            {classList &&
              classList.data.data?.map((item) => (
                <Option value={item._id} label="class">
                  {item.title}
                </Option>
              ))}
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
      <CustomToastContainer />
    </>
  );
};
