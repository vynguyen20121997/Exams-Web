import { parseParamsToQueryString } from "../../utils/parseParamsToQueryString";
import api from "../axiosInstance";

const subjectAPI = {
  subjects: ({ limit = 5, page = 1 }) => {
    const queryParams = parseParamsToQueryString({ limit, page });
    const url = `/subjects?${queryParams}`;
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
