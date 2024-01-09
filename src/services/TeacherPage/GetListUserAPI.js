import api from "../axiosInstance";

export const getListUserTeacherPage = {
  getListTeacher: () => {
    const url = "/users/teachers";
    return api.get(url);
  },
  getListStudent: () => {
    const url = "/users/students";
    return api.get(url);
  },
};
