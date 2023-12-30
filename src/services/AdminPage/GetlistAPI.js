import api from "../axiosInstance";

export const getListUserAdminPage = {
    getListUser: (token) => {
        const url = '/users';
        return api.get(url,  {
            headers: {
              'x-access-token': token, 
            },
          })
    },
    getListTeacher:  (token) => {
        const url = '/users/teachers';
        return api.get(url,  {
            headers: {
              'x-access-token': token, 
            },
          })
    },
    getListStudent: (token) => {
        const url = '/users/students';
        return api.get(url,  {
            headers: {
              'x-access-token': token, 
            },
          })
    },
}
