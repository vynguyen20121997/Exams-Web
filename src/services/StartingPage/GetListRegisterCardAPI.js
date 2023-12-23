import api from "../axiosInstance";

const GetListRegisterCardAPI = {
    subjects: () => {
        const url = '/subjects';
        return api.get(url)
    },
    classes: () => {
        const url = '/class';
        return api.get(url)
    },

}

export default GetListRegisterCardAPI;
