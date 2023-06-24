import axios from "axios";

<<<<<<< HEAD
const BASE_URL = "http://13.58.199.98:8080/";
//https://5315-179-33-158-21.ngrok-free.app
=======
const BASE_URL = "http://ec2-13-58-199-98.us-east-2.compute.amazonaws.com:8080";
>>>>>>> eedc803553e8957830115f682d413ce77a556bc9
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
