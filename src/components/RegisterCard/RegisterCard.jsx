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
import AuthAPI from "../../services/AuthAPI";

export function RegisterCard({ setRegister }) {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      username: "",
      password: "",
      reenterpassword: "",
    },
    onSubmit: async (values) => {
      console.log("values", values);
      try {
        const response = await AuthAPI.register(values);
        console.log("response", response);
      } catch (error) {}
    },
  });
  const { handleSubmit, handleChange } = formik;

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
      <CardBody className="flex flex-col gap-4">
        <Input
          label="Name"
          id="name"
          name="name"
          onChange={handleChange}
          size="lg"
        />

        <Select label="Who are you?">
          <Option>Student</Option>
          <Option>Teacher</Option>
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
          onChange={handleChange}
          size="lg"
        />
        <Input
          label="Re-enter Password"
          id="reenterpassword"
          name="reenterpassword"
          onChange={handleChange}
          size="lg"
        />
      </CardBody>
      <CardFooter className="pt-0">
        <Button variant="gradient" fullWidth onClick={handleSubmit}>
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
