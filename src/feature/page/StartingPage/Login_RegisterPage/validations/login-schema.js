import * as yup from 'yup';

const LoginValidationSchema = yup.object().shape({
    email: yup.string().email('Email must be a valid Email').required(),
    password: yup.string().min(8, 'Password must be at least 8 characters long').required()
})

export default LoginValidationSchema
