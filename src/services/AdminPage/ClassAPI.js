import api from "../axiosInstance";

const url = "/class";

const ClassAPI = {
  classes: () => {
    return api.get(url);
  },
  createClass: (body) => {
    return api.post(url, body);
  },
};

export default ClassAPI;
