import {FileType} from "../../components/Desktop";
import {InitialStateType, PayloadType} from "../weather-reducer";

export const GET_WEATHER_SUCCESS = 'GET_WEATHER_SUCCESS'

export const getWeatherSuccess = (weather: PayloadType) => {
    return {
        type: GET_WEATHER_SUCCESS,
        payload: weather
    }
}

export type ActionTypes = 'GET_WEATHER_SUCCESS'