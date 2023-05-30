import { movieInstance } from "./movieInstance";

export const getMovies = () => {
  let movies = movieInstance.get();
  return movies;
};

export const getMovieById = (id) => {
  return movieInstance.get(`/${id}`);
};

export const getMovieByCategoryId = (category_id) => {
  return movieInstance.get(`/${category_id}`);
};

export const getMovie = (name) => {
  let movies = movieInstance.get("", { params: { name: name } });
  return movies;
};

export const deleteMovie = (id) => {
  return movieInstance.delete(`/${id}`);
};

export const updateMovie = (id, data) => {
  return movieInstance.patch(`/${id}`, data);
};

export const createMovie = (data) => {
  return movieInstance.post("/", data);
};
