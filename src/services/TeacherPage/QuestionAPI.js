import { parseParamsToQueryString } from "../../utils/parseParamsToQueryString";
import api from "../axiosInstance";

export const QuestionAPITeacherPage = {
  getQuestions: ({ limit = 10, page = 1, classId, subjectId }) => {
    const queryParams = parseParamsToQueryString({
      limit,
      page,
      classId,
      subjectId,
    });
    const url = `/questions/?${queryParams}`;
    return api.get(url);
  },
};
