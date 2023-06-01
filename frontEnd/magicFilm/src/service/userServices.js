export const userLogin = (data) => {
    return axiosInstance.post(`/user/login`, data);
};

export const userLogout = (data, headers) => {
    return axiosInstance.post(`/user/logout`, data), headers={headers};
  };