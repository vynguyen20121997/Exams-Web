import { parseParamsToQueryString } from "../../utils/parseParamsToQueryString";
import api from "../axiosInstance";

export const getListUserAdminPage = {
  getListUser: ({ limit = 5, page = 1, role }) => {
    const queryParams = parseParamsToQueryString({ limit, page, role });

    return api.get(`/users?${queryParams}`);
  },
};

// request query ?limit=5&page=1 => limit, page là 2 query
// request params /users/:id => id là 1 param
// Javascript ES6: default value
