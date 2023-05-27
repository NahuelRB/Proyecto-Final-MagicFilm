import axios from "axios";

export const movieInstance = axios.create({
  baseURL: "http://localhost:3000/movies",
});
