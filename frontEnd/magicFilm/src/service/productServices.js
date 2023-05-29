import { axiosInstance } from "./axiosInstance";


export const getMovies = () => {
  let movies = axiosInstance.get("/movies");
  return movies;
};

export const getMovieById = (id) => {
  return axiosInstance.get(`/movies/${id}`);
};

export const getMovie = (title) => {
  let movies = axiosInstance.get("/movies", { params: { title: title } });
  return movies;
};

export const deleteMovie = (id) => {
  return axiosInstance.delete(`/movies/${id}`);
};

export const updateMovie = (id, data) => {
  return axiosInstance.patch(`/movies/${id}`, data);
};

export const createMovie = (data) => {
  return axiosInstance.post(`/movies/`, data);
};

