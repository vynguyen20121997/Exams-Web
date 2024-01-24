import api from "../axiosInstance";

export const UserAPI = {
  edit: ({ id, body }) => {
    const url = `users/profile/${id}`;
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
