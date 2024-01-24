import { parseParamsToQueryString } from "../../utils/parseParamsToQueryString";
import api from "../axiosInstance";

const testAPI = {
  tests: ({ limit = 5, page = 1, classId, subjectId, createdBy }) => {
    const queryParams = parseParamsToQueryString({
      limit,
      page,
      classId,
      subjectId,
      createdBy,
    });
    const url = `/tests?${queryParams}`;
    return api.get(url);
  },
  createTest: (body) => {
    const url = "/tests";
    return api.post(url, body);
  },
};

export default testAPI;
