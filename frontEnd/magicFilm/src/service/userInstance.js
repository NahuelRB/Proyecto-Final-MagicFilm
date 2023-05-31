import axios from "axios";

export const userInstance = axios.create({
    baseURUL:"http://localhost:3000/user"
})