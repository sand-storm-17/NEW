import axios from "axios";

export const axiosInstance = axios.create({
    baseURL : "https://booking-app-sandeep.herokuapp.com/api"
})