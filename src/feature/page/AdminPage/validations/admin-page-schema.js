import * as yup from 'yup';

export const AddUserValidationSchema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email('Email must be a valid Email').required(),
    username: yup.string().required(),
    
})

export const AddSubjectValidationSchema = yup.object().shape({
    subject: yup.string().required(),
    
})
