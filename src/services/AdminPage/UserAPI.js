import api from "../axiosInstance";

export const UserAPI = {
    edit: (body) => {
        const url = '/';
        return api.put(url, body)
    },
    delete: (body) => {
        const url = '/deleteuser';
        return api.post(url, body)
    },
}
