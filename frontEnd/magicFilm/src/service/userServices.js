import { axiosInstance, axiosProtected } from "./axiosInstance"


export const userLogin = (data) => {
    return axiosInstance.post(`/login`, data);
};

export const userLogout = (data, headers) => {
    return axiosProtected.post(`/logout`, data), headers={headers};
};


export const getUsers =()=>{
    let users= axiosProtected.get("/user/");
    return users;
};

export const getUsersByID =(id)=>{
    let users= axiosProtected.get(`/user/${id}`);
    return users;
};

export const getUser=(name)=>{
    let users = axiosProtected.get("/user/", {params:{name:name}})
    return users;
};

export const getSecrets=(   )=>{
    let user = axiosProtected.get("/user/secrets")
    return user;
};

export const deleteUser=(id)=>{
    return axiosProtected.delete(`/user/${id}`);
}


export const updateUser=(id, data)=>{
    return axiosProtected.patch(`/user/${id}`, data);
}

export const createUser =(data)=>{
    return axiosInstance.post("http://localhost:3000/user/", data);
}