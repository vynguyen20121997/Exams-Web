import api from "../axiosInstance";

export const UserAPI = {
  edit: (body) => {
    const url = "/";
    return api.put(url, body);
  },
  delete: (id) => {
    const url = `/users/${id}`;
    return api.delete(url);
  },
  register: (body) => {
    const url = "/auth/signup";
    return api.post(url, body);
  },
};
