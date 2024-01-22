import { parseParamsToQueryString } from "../../utils/api";
import api from "../axiosInstance";

export const getListUserTeacherPage = {
  getListUser: ({ limit = 10, page = 1, role }) => {
    const queryParams = parseParamsToQueryString({ limit, page, role });

    return api.get(`/users?${queryParams}`);
  },
};
