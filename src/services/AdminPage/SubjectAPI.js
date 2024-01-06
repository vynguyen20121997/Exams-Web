import api from "../axiosInstance";

const subjectAPI = {
  subjects: () => {
    const url = "/subjects";
    return api.get(url);
  },
  createSubject: (body) => {
    const url = "/subjects/create";
    return api.post(url, body);
  },
};

export default subjectAPI;
