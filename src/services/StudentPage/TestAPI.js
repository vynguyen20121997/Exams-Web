import { parseParamsToQueryString } from "../../utils/parseParamsToQueryString";
import api from "../axiosInstance";

const testAPI = {
  tests: ({ limit = 5, page = 1, subjectId, createdBy }) => {
    const queryParams = parseParamsToQueryString({
      limit,
      page,
      subjectId,
      createdBy,
    });
    const url = `/tests?${queryParams}`;
    return api.get(url);
  },
  getTest: (id) => {
    const url = `/tests/${id}`;
    return api.get(url);
  },
  getResults: (body) => {
    const url = "/resultTests";
    return api.post(url, body);
  },
};

export default testAPI;
