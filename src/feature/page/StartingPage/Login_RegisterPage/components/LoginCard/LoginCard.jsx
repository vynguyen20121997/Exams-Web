import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Input,
  Spinner,
  Typography,
} from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import { useFormik } from "formik";
import { Link, Navigate, useNavigate } from "react-router-dom";
import AuthAPI from "../../../../../../services/StartingPage/AuthAPI";
import { useState } from "react";
import CustomErrorMessage from "../../../../../../components/ErrorCutomMessage/ErrorCutomMessage";
// import { fetchCurrentUser } from "../../../../../../redux/auth/authAction";
// import { useDispatch, useSelector } from "react-redux";

export function LoginCard({ setRegister }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  // const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  // const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      console.log("values", values);
      try {
        setLoading(true);

        const response = await AuthAPI.login(values);
        const accessToken = response.data.accessToken;
        console.log("accessToken", accessToken);
        if (accessToken) {
          localStorage.setItem("accessToken", accessToken);
          // await dispatch(fetchCurrentUser());
          navigate("/admin");
        }
      } catch (error) {
        setError(error.response.data?.message);
      } finally {
        setLoading(false);
      }
    },
  });

  const { handleSubmit, handleChange, errors } = formik;

  // if (isAuthenticated) {
  // <Navigate to="/" />
  // }
  return (
    <>
      <Card className="w-96">
        <CardHeader
          variant="gradient"
          color="gray"
          className="mb-4 grid h-28 place-items-center"
        >
          <Typography variant="h3" color="white">
            Sign In
          </Typography>
        </CardHeader>

        {error && <p className="text-red-500 my-4">{error}</p>}

        <CardBody className="flex flex-col gap-4">
          {errors.email && <CustomErrorMessage content={errors.email} />}

          <Input
            label="Email"
            size="lg"
            id="email"
            name="email"
            onChange={handleChange}
          />
          {errors.password && <CustomErrorMessage content={errors.password} />}

          <Input
            label="Password"
            size="lg"
            id="password"
            name="password"
            type="password"
            onChange={handleChange}
          />
          <div>
            <Link to="forgot-password">
              <Typography variant="small">Forgot password?</Typography>
            </Link>
          </div>
        </CardBody>

        <CardFooter className="pt-0">
          <Button variant="gradient " fullWidth onClick={handleSubmit}>
            {loading === true && <Spinner color="purple" className="h-6 w-6 ml-[47%]" />}
            {loading === false && <h2>Sign In</h2>}
          </Button>
          <Typography variant="small" className="mt-6 flex justify-center">
            Don&apos;t have an account?
            <Typography
              as="a"
              href="#signup"
              variant="small"
              color="blue-gray"
              className="ml-1 font-bold"
              onClick={() => setRegister(true)}
            >
              Sign up
            </Typography>
          </Typography>
        </CardFooter>
      </Card>
    </>
  );
}
