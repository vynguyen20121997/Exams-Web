import { parseParamsToQueryString } from "../../utils/parseParamsToQueryString";
import api from "../axiosInstance";

const testQuestionAPI = {
  question: ({ limit = 1, page = 1 }, { body }) => {
    const queryParams = parseParamsToQueryString({
      limit,
      page,
    });
    const url = `/tests?${queryParams}`;
    return api.get(url, body);
  },
  questionTest: ({ limit, page, body }) => {
    const queryParams = parseParamsToQueryString({
      limit,
      page,
    });
    const url = `/questions/test?${queryParams}`;
    return api.post(url, body);
  },
};

export default testQuestionAPI;
