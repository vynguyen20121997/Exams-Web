
export const generateUserPayload = (values, classList) => {
    const payload = {
        name: values.name,
        role: values.role,
        email: values.email,
        username: values.username,
        password: values.password,
        classId: "",
    };

    if (values.role === 'student') {
        const matchingClass = classList && classList.data.data?.find((i) => i.title === values.class);
        if (matchingClass) {
            payload.classId = matchingClass._id;
        }
    }

    return payload;
};
