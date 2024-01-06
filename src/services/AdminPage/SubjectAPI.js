import api from "../axiosInstance";

const token = localStorage.getItem("accessToken");

const subjectAPI = {
    subjects: () => {
        const url = '/subjects';
        return api.get(url)
    },
    createSubject: (payload) => { 
         const url = '/subjects/create';
        return api.post(url, {
            body: { payload },
            headers: {
                'x-access-token': token
            },
        }) 
    }
}

export default subjectAPI;
