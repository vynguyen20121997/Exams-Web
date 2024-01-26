import { parseParamsToQueryString } from "../../utils/parseParamsToQueryString";
import api from "../axiosInstance";

export const getListUserAdminPage = {
  getListUser: ({ limit = 5, page = 1, role }) => {
    const queryParams = parseParamsToQueryString({ limit, page, role });

    return api.get(`/users?${queryParams}`);
  },
};
