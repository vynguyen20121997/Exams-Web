import api from "../axiosInstance";

const GetListAdminPageAPI = {
    subjects: () => {
        const url = '/subjects';
        return api.get(url)
    },
    classes: () => {
        const url = '/class';
        return api.get(url)
    },

}

export default GetListAdminPageAPI;
