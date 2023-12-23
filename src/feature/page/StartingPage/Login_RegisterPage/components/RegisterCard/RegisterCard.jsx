import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Input,
  Option,
  Select,
  Typography,
} from "@material-tailwind/react";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import CustomErrorMessage from "../../../../../../components/ErrorCutomMessage/ErrorCutomMessage";
import AuthAPI from "../../../../../../services/StartingPage/AuthAPI";
import GetListRegisterCardAPI from "../../../../../../services/StartingPage/GetListRegisterCardAPI";
import {
  RegisterCardRoleData,
  RegisterCardSubjectData,
} from "../../untils/data";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function RegisterCard({ setRegister }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [classList, setClassList] = useState({});

  const fetchListData = async () => {
    try {
      const response = await GetListRegisterCardAPI.classes();

      setClassList(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchListData();
  }, []);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      role: "",
      subject: "",
      username: "",
      password: "",
      reenterpassword: "",
      class: 0,
    },
    // validationSchema: RegisterValidationSchema,

    onSubmit: async (values) => {
      if (values.role === "student") {
        const studentClassID =
          classList && classList.find((i) => i.title === values.class);
        const studentPayLoad = {
          name: values.name,
          role: values.role,
          email: values.email,
          username: values.username,
          password: values.password,
          classId: studentClassID._id,
        };

        console.log("studentPayLoad", studentPayLoad);
        try {
          setLoading(true);
          const response = await AuthAPI.register(studentPayLoad);
          console.log("response", response);
          const accessToken = response.data.accessToken;

          if (accessToken) {
            resetForm();
            // toast.success("register successfully", {
            //   draggable: false,
            //   position: toast.POSITION.TOP_RIGHT,
            // });
            alert("fix the bug");
            setRegister(false);
          }
        } catch (error) {
          toast.error("error occured");
        } finally {
          setLoading(false);
        }
      }

      if (values.role === "teacher") {
        const teacherPayLoad = {
          name: values.name,
          role: values.role,
          email: values.email,
          username: values.username,
          password: values.password,
          subject: values.subject,
        };

        console.log("teacherPayLoad", teacherPayLoad);
        try {
          setLoading(true);
          // const response = await AuthAPI.register(values);
          // console.log("response", response);
          // const accessToken = response.data.accessToken;

          // if (accessToken) {
          // await dispatch(fetchCurrentUser());
          //   navigate("/");
          // }
        } catch (error) {
          setError(error.response.data?.message);
        } finally {
          setLoading(false);
        }
      }
    },
  });
  const {
    handleSubmit,
    handleChange,
    setFieldValue,
    setFieldTouched,
    resetForm,
    errors,
    values,
  } = formik;

  return (
    <Card className="w-96">
      <CardHeader
        variant="gradient"
        color="gray"
        className="mb-4 grid h-28 place-items-center"
      >
        <Typography variant="h3" color="white">
          Sign Up
        </Typography>
      </CardHeader>
      {error && <p className="text-red-500 my-4">{error}</p>}

      <CardBody className="flex flex-col gap-4">
        <Input
          label="Name"
          id="name"
          name="name"
          onChange={handleChange}
          size="lg"
        />

        <Select
          label="Who are you?"
          id="role"
          name="role"
          onChange={(value) => setFieldValue("role", value)}
          onBlur={() => setFieldTouched("role", true)}
        >
          {RegisterCardRoleData.map((item) => (
            <Option value={item.roleValue} label="student">
              {item.roleName}
            </Option>
          ))}
        </Select>
        {errors.email && <CustomErrorMessage content={errors.email} />}

        {values.role !== "" && values.role === "teacher" && (
          <Select
            label="Which subject are you teaching?"
            id="subject"
            name="subject"
            onChange={(value) => setFieldValue("subject", value)}
            onBlur={() => setFieldTouched("subject", true)}
          >
            {RegisterCardSubjectData.map((item) => (
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
            {classList?.map((item) => (
              <Option value={item.title} label="student">
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
        {errors.username && <CustomErrorMessage content={errors.username} />}
        <Input
          label="Username"
          id="username"
          name="username"
          onChange={handleChange}
          size="lg"
        />
        {errors.password && <CustomErrorMessage content={errors.password} />}
        <Input
          label="Password"
          id="password"
          name="password"
          type="password"
          onChange={handleChange}
          size="lg"
        />
        {errors.reenterpassword && (
          <CustomErrorMessage content={errors.reenterpassword} />
        )}
        <Input
          label="Re-enter Password"
          id="reenterpassword"
          name="reenterpassword"
          type="password"
          onChange={handleChange}
          size="lg"
        />
      </CardBody>
      <CardFooter className="pt-0">
        <Button
          isLoading={loading}
          variant="gradient"
          fullWidth
          onClick={handleSubmit}
        >
          Register
        </Button>
        <Typography variant="small" className="mt-6 flex justify-center">
          Have an account?
          <Typography
            as="a"
            href="#signup"
            variant="small"
            color="blue-gray"
            className="ml-1 font-bold"
            onClick={() => setRegister(false)}
          >
            Sign in
          </Typography>
        </Typography>
      </CardFooter>
    </Card>
  );
}
