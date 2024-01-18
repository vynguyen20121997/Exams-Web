import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Input,
  Spinner,
  Typography,
} from "@material-tailwind/react";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import CustomErrorMessage from "../../../../../../components/ErrorCutomMessage/ErrorCutomMessage";
import { login } from "../../../../../../redux/auth/authSlice";
import AuthAPI from "../../../../../../services/StartingPage/AuthAPI";
import { loginInitialValues } from "../../constants/constants";

export function LoginCard({ setRegister }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const [role, setRole] = useState();

  const formik = useFormik({
    initialValues: loginInitialValues,
    onSubmit: async (values) => {
      try {
        setLoading(true);
        const response = await AuthAPI.login(values);
        const accessToken = response.data.accessToken;

        if (accessToken) {
          localStorage.setItem("accessToken", accessToken);
          const currentUserResponse = await AuthAPI.currentUser();
          dispatch(login(currentUserResponse.data.data));
          setRole(currentUserResponse?.data.data.role);
        }
      } catch (error) {
        setError(error.response.data?.message);
      } finally {
        setLoading(false);
      }
    },
  });
  const { handleSubmit, handleChange, errors } = formik;

  useEffect(() => {
    if (isAuthenticated && role) {
      navigate(`/${role}`);
    }
  }, [isAuthenticated, navigate, role]);

  return (
    <>
      <Card className="w-96">
        <CardHeader color="gray" className="mb-4 grid h-28 place-items-center">
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
          <Button fullWidth onClick={handleSubmit}>
            {loading === true && (
              <Spinner color="purple" className="h-6 w-6 ml-[47%]" />
            )}
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
