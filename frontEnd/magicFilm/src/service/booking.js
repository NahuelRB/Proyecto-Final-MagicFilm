import { axiosInstance, axiosProtected } from "./axiosInstance";

export const createBooking = (data) => {
    return axiosProtected.post("/booking", data);
}