export const TABS = [
    {
        label: "All",
        value: "all",
    },
    {
        label: "Teacher",
        value: "teacher",
    },
    {
        label: "Student",
        value: "student",
    },
];

export const TABLE_HEAD_USER_MANAGEMENT = ["Member", "Function", "Status", "Active Date", ""];

export const TABLE_HEAD_CLASS_MANAGEMENT = ["Class", "Form Teacher", "Status", "Active Date", ""];

export const TABLE_HEAD_SUBJECT_MANAGEMENT = ["Subject", "Description", "Status", "Active Date", ""];


export const AddUserInitialValues = {
    name: "",
    email: "",
    role: "",
    subject: "",
    username: "",
    password: "",
    confirm_password: "",
    class: 0,
}
  
export const addSubjectInitialValue = {
    subject: "",
}