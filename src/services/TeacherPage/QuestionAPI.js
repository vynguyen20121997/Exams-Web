import api from "../axiosInstance";

const QuestionAPITeacherPage = {
  questions: () => {
    const url = "/questions";
    return api.get(url);
  },
  questionBySubject: (body) => {
    const url = "/questions/subject";
    return api.get(url, body);
  },
  questionByClass: (body) => {
    const url = "/questions/class";
    return api.get(url, body);
  },
};

export default QuestionAPITeacherPage;
