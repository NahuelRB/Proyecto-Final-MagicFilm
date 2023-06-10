import {userInstance } from "./axiosInstance"

export const getUsers =()=>{
    let users= userInstance.get();
    return users;
};

export const  getUser=(name)=>{
    let users = userInstance.get("", {params:{name:name}})
    return users;
};

export const deleteUser=(id)=>{
    return userInstance.delete(`/user/${id}`);
}


export const updateUser=(id, data)=>{
    return userInstance.patch(`/user/${id}`, data);
}

export const createUser =(data)=>{
    return userInstance.post("/user/", data);
}