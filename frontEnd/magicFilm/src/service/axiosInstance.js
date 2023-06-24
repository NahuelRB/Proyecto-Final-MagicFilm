import axios from "axios";

const BASE_URL = "http://13.58.199.98:8080/";
//https://5315-179-33-158-21.ngrok-free.app
export const axiosInstance = axios.create({
  baseURL: BASE_URL
});


export const axiosProtected = axiosInstance;

axiosProtected.interceptors.request.use((config) => {
  const token = localStorage.getItem('token'); // Obtén el token del almacenamiento local o de donde lo hayas almacenado
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`; // Agrega el token al header de autorización
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});
