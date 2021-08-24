import axios from "axios";

export const baseURL = 'http://localhost:8000'

export const apiURL = baseURL + '/api'
export const mediaURL = baseURL + '/media/'

export const APIInstance = axios.create({
    baseURL: apiURL,
    headers: {
        'Accept-Language': 'ru'
    }
})
