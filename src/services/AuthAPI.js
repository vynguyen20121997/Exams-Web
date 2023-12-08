import api from "./axiosInstance";

const AuthAPI = {
    register: (body) => {
        const url = '/signup';
        return api.post(url, body)
    },
    login: (body) => {
        const url = '/login';
        return api.post(url, body)
    },
    fetchCurrentUser: () => {
        const url = '/fetchcurentUser';
        return api.get(url)
    }
}

export default AuthAPI
