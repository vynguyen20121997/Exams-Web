import api from "../axiosInstance";

export const getListUserAdminPage = {
  getListUser: () => {
    const url = "/users";
    return api.get(url);
  },
  getListTeacher: () => {
    const url = "/users/teachers";
    return api.get(url);
  },
  getListStudent: () => {
    const url = "/users/students";
    return api.get(url);
  },
};
