import axios from "axios";

export const baseURL = 'http://127.0.0.1:8000'

export const apiURL = baseURL + '/api'
export const mediaURL = baseURL + '/media/'

export const APIInstance = axios.create({
    baseURL: apiURL,
})
