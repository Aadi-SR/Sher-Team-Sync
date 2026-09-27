import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://team-sync-backend-n78w.onrender.com/api",
  withCredentials: true,
});

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    console.log(error.response);
    console.log(error.config);

    let originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry && !originalRequest.url.includes("/auth/login")) 
      // refresh  token may not expire while the next user tries to log in, we dont want to give the new user the access token if the credentials are wrong, hence that 3rd condition
      {
      originalRequest._retry = true; // so that this only runs once

      try {
        const response = await axiosInstance.get("/auth/get-accessToken");
        // 401 yahi pe intercept kar liya, and if you get the access token here , ek aur baar og req maaro, this way user doesnt see the error but the home page
        return axiosInstance(originalRequest);
      } catch (error) {
        window.location.href = '/';
        return Promise.reject(error);
      }

    }
  },
);

export default axiosInstance;
