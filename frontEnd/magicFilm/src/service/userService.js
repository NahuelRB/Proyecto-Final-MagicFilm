import {axiosInstance } from "./axiosInstance"

export const getUsers =()=>{
    let users= axiosInstance.get();
    return users;
};

export const  getUser=(name)=>{
    let users = axiosInstance.get("", {params:{name:name}})
    return users;
};

export const deleteUser=(id)=>{
    return axiosInstance.delete(`/users`);
}


export const updateUser=(id, data)=>{
    return axiosInstance.patch(`/${id}`, data);
}

export const createUser =(data)=>{
    return axiosInstance.post("/users", data);
}