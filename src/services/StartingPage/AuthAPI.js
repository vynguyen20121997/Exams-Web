import api from "../axiosInstance";

const AuthAPI = {
  register: (body) => {
    const url = "/auth/signup";
    return api.post(url, body);
  },
  login: (body) => {
    const url = "/auth/login";
    return api.post(url, body);
  },
  currentUser: () => {
    const url = "/auth/me";
    return api.get(url);
  },
};

export default AuthAPI;
