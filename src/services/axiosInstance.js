import axios from "axios";
// import { TOKEN_TYPES } from '../utils/constants';

const BASE_API_URL = "https://backend-project-b9qu.onrender.com/api/v1/";

const api = axios.create({
  baseURL: BASE_API_URL,
  timeout: 10000,
});

// Attach accessToken to request headers
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");

  if (token) {
    config.headers["x-access-token"] = token;
  }
  return config;
});

// api.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error.response.status === 401) {
//       localStorage.removeItem('accessToken');
//       window.location.href = '/login';
//     }
//   }
// );

export default api;
