import api from "../axiosInstance";

const token = localStorage.getItem("accessToken");


export const UserAPI = {
    edit: (body) => {
        const url = '/';
        return api.put(url, body)
    },
    delete: (payload, token) => {
        const url = '/users/delete';
        return api.delete(url, {
            body: { payload },
            headers: {
                'x-access-token': token,
            },
        })
    },
}
