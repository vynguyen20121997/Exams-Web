import api from "../axiosInstance";

const ClassAPI = {
    classes: () => {
        const url = '/class';
        return api.get(url)
    },
     createClass: (payload) => {
        const url = '/class/create';
        return api.post(url,payload)
    },

}

export default ClassAPI;
