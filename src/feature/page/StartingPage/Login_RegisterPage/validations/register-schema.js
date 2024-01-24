import * as yup from "yup";

const RegisterValidationSchema = yup.object().shape({
  name: yup.string().required(),
  role: yup.string().required(),
  email: yup.string().email("Email must be a valid Email").required(),
  username: yup.string().required(),
  password: yup
    .string()
    .matches(
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/,
      "Password must contain at least one number and one special character"
    )
    .min(8, "Password must be at least 8 characters long")
    .required(),
});

export default RegisterValidationSchema;
