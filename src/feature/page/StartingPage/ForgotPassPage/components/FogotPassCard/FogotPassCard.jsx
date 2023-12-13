import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Input,
  Typography,
} from "@material-tailwind/react";
import { useFormik } from "formik";

export function ForgotPassCard() {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: async (values) => {
      console.log("values", values);
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
          Reset Your Password
        </Typography>
      </CardHeader>

      <CardBody className="flex flex-col gap-4">
        <Typography variant="small" color="gray">
          We'll email you instructions to reset your password
        </Typography>
        <Input
          label="Email"
          size="lg"
          id="email"
          name="email"
          onChange={handleChange}
        />
      </CardBody>

      <CardFooter className="pt-0">
        <Button variant="gradient" fullWidth onClick={handleSubmit}>
          Continue
        </Button>
        <Typography variant="small" className="mt-6 flex justify-center">
          Don&apos;t have an account?
          <Typography
            as="a"
            href="#signup"
            variant="small"
            color="blue-gray"
            className="ml-1 font-bold"
          >
            Sign up
          </Typography>
        </Typography>
      </CardFooter>
    </Card>
  );
}
