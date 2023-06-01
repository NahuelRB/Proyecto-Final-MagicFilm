import { axiosInstance } from "./axiosInstance";


export const getMovies = () => {
  let movies = axiosInstance.get("/movies");
  return movies;
};

export const getMovieById = (id) => {
  return axiosInstance.get(`/movies/${id}`);
};

export const getMovieByCategoryId = async (category_id) => {
  // return axiosInstance.get(`/movies/category/${category_id}`);
  const movies = await axiosInstance.get(`/movies`);
  if (category_id === "0") return movies;
  const filtered = movies.data.filter(
      (movie) => movie.category.category_id === parseInt(category_id)
    )

  return { data: filtered }

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

export const getCategories = () => {
  // return axiosInstance.get(`/categories`);
  // ESTO ES TEMPORAL
  const categories = [
    { id: "0", title: "Todas"},
    { id: "2", title: "Estrenos",logo:"https://res.cloudinary.com/dtzs6lm4b/image/upload/v1684697721/Estrenos_l0gwwa.png", zoom:"https://res.cloudinary.com/dtzs6lm4b/image/upload/v1684978863/Estrenos_etsgfy.png" },
    { id: "3", title: "Preventa", logo: "https://res.cloudinary.com/dtzs6lm4b/image/upload/v1684697721/Preventa_mcttwl.png", zoom:"https://res.cloudinary.com/dtzs6lm4b/image/upload/v1684978919/Preventa_p2hofm.png"},
    { id: "1", title: "Cartelera", logo:"https://res.cloudinary.com/dtzs6lm4b/image/upload/v1684697721/Cartelera_iw60vx.png",zoom: "https://res.cloudinary.com/dtzs6lm4b/image/upload/v1684978967/Cartelera_eerfch.png"},
    { id: "4", title: "Promociones",logo:"https://res.cloudinary.com/dtzs6lm4b/image/upload/v1684977985/promocionesMobile_jyofic.png", zoom:"https://res.cloudinary.com/dtzs6lm4b/image/upload/v1684979172/Promociones_h5tjv8.png" },
  ];
  return new Promise((resolve, reject) => {
      setTimeout(function() {
        resolve({data: categories});
      }, 100);
  });
}