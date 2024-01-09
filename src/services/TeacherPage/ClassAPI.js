import api from "../axiosInstance";

const ClassAPITeacherPage = {
  classes: () => {
    const url = "/class";
    return api.get(url);
  },
  createClass: (body) => {
    const url = "/class/create";
    return api.post(url, body);
  },
};

export default ClassAPITeacherPage;
