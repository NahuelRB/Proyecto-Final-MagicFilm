import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
});

export const userInstance = axios.create({
  //baseURL: "http://3.145.4.78:8080/user",
  baseURL: "http://localhost:3000",
});

