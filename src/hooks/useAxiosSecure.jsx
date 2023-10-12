import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
  baseURL: "http://127.0.0.1:3000",
  withCredentials: true,
});

const useAxiosSecure = () => {
  const navigate = useNavigate();

  useEffect(() => {
    axiosSecure.interceptors.request.use(config => {
      const token = localStorage.getItem("at");
      if (token) {
        config.headers.Authorization = token;
      }
      console.log("Redirecting to /login");
      return config;
    });
    axiosSecure.interceptors.response.use(
      response => response,
      async error => {
        if (
          error.response &&
          (error.response.status === 401 || error.response.status === 403)
        ) {
          navigate("/login");
        }
        return Promise.reject(error);
      }
    );
  }, [navigate]);

  return [axiosSecure];
};

export default useAxiosSecure;
