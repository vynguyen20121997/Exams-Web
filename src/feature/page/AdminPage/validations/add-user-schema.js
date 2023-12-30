import * as yup from 'yup';

const AddUserValidationSchema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email('Email must be a valid Email').required(),
    username: yup.string().required(),
    
})

export default AddUserValidationSchema;
