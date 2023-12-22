import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
} from "@material-tailwind/react";
import { useFormik } from "formik";

const AddDialogExams = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      topicName: "",
    },
    // validationSchema: RegisterValidationSchema,
    onSubmit: async (values) => {
      console.log("values", values);
      // try {
      //   setLoading(true);
      //   const response = await AuthAPI.register(values);
      //   console.log("response", response);
      // } catch (error) {
      //   console.log("response", error);
      // } finally {
      //   setLoading(false);
      // }
    },
  });
  const { handleSubmit, handleChange } = formik;

  return (
    <>
      <Button onClick={handleOpen} size="sm" variant="gradient">
        Create Exams
      </Button>

      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Add Exams</DialogHeader>
        <DialogBody className="flex flex-col gap-4">
          <Input
            label="Topic Name"
            id="topicName"
            name="topicName"
            onChange={handleChange}
            size="lg"
          />
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
          <Button
            variant="gradient"
            color="green"
            onClick={(() => handleSubmit, handleOpen)}
          >
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
};

export default AddDialogExams;
