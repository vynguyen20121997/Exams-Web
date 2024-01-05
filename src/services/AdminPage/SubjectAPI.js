import api from "../axiosInstance";

const subjectAPI = {
    subjects: () => {
        const url = '/subjects';
        return api.get(url)
    },
}

export default subjectAPI;
