import axios from "axios";

import { getAuth, clearAuth } from "../utils/storage";

const baseURL = import.meta.env.VITE_API_BASE_URI || "http://localhost:5000";

const axiosClint = axios.create({
  baseURL,
  headers: { "Content-Type": "application/json" },
});

axiosClint.interceptors.request.use(
  (config) => {
    const auth = getAuth();
    const token = auth?.token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

axiosClint.interceptors.response.use(
  (res) => res,
  (error) => {
    const status = error.response?.status;
    if (status == 401) {
      clearAuth();
      window.location.assign("/login");
    }
    return Promise.reject(error);
  },
);


export default axiosClint;