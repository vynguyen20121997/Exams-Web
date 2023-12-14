import api from "./axiosInstance";

export const UserAPI = {
    getListAdmin: (body) => {
        const url = '/listuser';
        return api.get(url, body)
    },
    getListTeacher: (body) => {
        const url = '/listteacher';
        return api.get(url, body)
    },
    getListStudent: (body) => {
        const url = '/liststudenr';
        return api.get(url, body)
    },
}
