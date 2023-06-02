import { axiosInstance } from "./axiosInstance";

export const getCategories = () => {
  let categories = axiosInstance.get("/categories");
  return categories;
};

export const getCategoryById = (id) => {
  return axiosInstance.get(`/categories/${id}`);
};

/* export const getCategory = (title) => {
  let categories = axiosInstance.get("/categories", {
    params: { title: title },
  });
  return categories;
}; */

export const deleteCategory = (id) => {
  return axiosInstance.delete(`/categories/${id}`);
};

export const updateCategory = (id, data) => {
  return axiosInstance.patch(`/categories/${id}`, data);
};

export const createCategory = (data) => {
  return axiosInstance.post(`/categories/`, data);
};
