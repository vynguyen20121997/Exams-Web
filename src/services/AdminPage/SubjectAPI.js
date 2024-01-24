import api from "../axiosInstance";

const subjectAPI = {
  subjects: () => {
    const url = "/subjects";
    return api.get(url);
  },
  createSubject: (body) => {
    const url = "/subjects";
    return api.post(url, body);
  },
  deleteSubject: (id) => {
    const url = `/subjects/${id}`;
    return api.delete(url);
  },
};

export default subjectAPI;
