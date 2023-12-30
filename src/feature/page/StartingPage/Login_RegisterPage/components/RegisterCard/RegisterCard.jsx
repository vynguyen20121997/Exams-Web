import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Input,
  Option,
  Select,
  Spinner,
  Typography,
} from "@material-tailwind/react";
import { useFormik } from "formik";
import { useState } from "react";
import { useQuery } from "react-query";
import CustomErrorMessage from "../../../../../../components/ErrorCutomMessage/ErrorCutomMessage";
import AuthAPI from "../../../../../../services/StartingPage/AuthAPI";
import GetListRegisterCardAPI from "../../../../../../services/StartingPage/GetListRegisterCardAPI";
import {
  RegisterCardRoleData,
  RegisterCardSubjectData,
} from "../../untils/data";
import RegisterValidationSchema from "../../validations/register-schema";
import { generateUserPayload } from "../../../../../../untils/generatorUserPayload";
import { registerInitialValues } from "../../constants/constants";

export function RegisterCard({ setRegister }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { data: classList } = useQuery("class", () =>
  GetListRegisterCardAPI.classes()
);

  const formik = useFormik({
    initialValues:registerInitialValues,
    validationSchema: RegisterValidationSchema,

    onSubmit: async (values) => {
      
      if (values.role === "student") {
        const payload = await generateUserPayload(values,classList);
        try {
          setLoading(true);
          const response = await AuthAPI.register(payload);
          console.log("response", response);
          const accessToken = response.data.accessToken;

          if (accessToken) {
            resetForm();
            alert("fix the bug");
            setRegister(false);
          }
        } catch (error) {
        } finally {
          setLoading(false);
          setRegister(false);
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
    <>
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
          
          {errors.role && <CustomErrorMessage content={errors.role} />}

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
              {classList.data.data?.map((item) => (
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
          {errors.email && <CustomErrorMessage content={errors.email} />}

          <Input
            label="Username"
            id="username"
            name="username"
            onChange={handleChange}
            size="lg"
          />
          {errors.username && <CustomErrorMessage content={errors.username} />}

          <Input
            label="Password"
            id="password"
            name="password"
            type="password"
            onChange={handleChange}
            size="lg"
          />
          {errors.password && <CustomErrorMessage content={errors.password} />}

          <Input
            label="Confirm password"
            id="confirm_password"
            name="confirm_password"
            type="password"
            onChange={handleChange}
            size="lg"
          />
          {errors.confirm_password && (
            <CustomErrorMessage content={errors.reenterpassword} />
          )}
        </CardBody>
        <CardFooter className="pt-0">
          <Button
            variant="gradient"
            fullWidth
            onClick={handleSubmit}
          >
            {loading === true && (
              <Spinner color="purple" className="h-6 w-6 ml-[47%]" />
            )}
            {loading === false && <h2>Register</h2>}
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
    </>
  );
}
