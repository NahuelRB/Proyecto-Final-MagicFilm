import { axiosInstance, axiosProtected } from "./axiosInstance";

export const getScores =()=>{
    let score= axiosInstance.get("/score");
    return score;
};

export const scoreFilter =(data)=>{
    let score= axiosProtected.post("/score/filter", data);
    return score;
};


export const createScore =(data)=>{
    return axiosProtected.post("/score", data);
}