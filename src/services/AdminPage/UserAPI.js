import api from "../axiosInstance";

export const UserAPI = {
  edit: (body) => {
    const url = "/";
    return api.put(url, body);
  },
  delete: (body) => {
    const url = "/users/delete";
    return api.delete(url, body);
  },
  register: (body) => {
    const url = "/auth/signup";
    return api.post(url, body);
  },
};
