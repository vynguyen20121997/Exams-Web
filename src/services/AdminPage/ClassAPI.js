import { parseParamsToQueryString } from "../../utils/parseParamsToQueryString";
import api from "../axiosInstance";

const ClassAPI = {
  classes: ({ limit = 5, page = 1 }) => {
    const queryParams = parseParamsToQueryString({ limit, page });
    const url = `/class?${queryParams}`;
    return api.get(url);
  },
  createClass: (body) => {
    const url = "/class";
    return api.post(url, body);
  },
};

export default ClassAPI;
