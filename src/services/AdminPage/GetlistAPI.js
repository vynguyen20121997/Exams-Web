import api from "../axiosInstance";

export const getListUserAdminPage = {
  getListUser: (limit = 5, page, role) => {
    if (role) {
      return api.get(`/users?limit=${limit}&page=${page}&role=${role}`);
    } else {
      return api.get(`/users?limit=${limit}&page=${page}`);
    }
    // const url = `/users?limit=${limit}&page=${page}&role=${role}`;
    // return api.get(url);
  },
};
