import {ActionTypes, GET_WEATHER_SUCCESS, getWeatherSuccess} from "./actions/weather-actions";
import {Dispatch} from "redux";
import {weatherApi} from "../api/weather-api";
import {END_FETCHING, endFetching, GeneralActionTypes, START_FETCHING, startFetching} from "./actions/general-actions";

type WeatherType = {
    id: number
    main: string
    description: string
    icon: string
}

type MainType = {
    temp: number,
    feels_like: number,
    temp_min: number,
    temp_max: number,
    pressure: number,
    humidity: number,
    sea_level: number,
    grnd_level: number,
}

export const initialState = {
    weather: {
        id: 0,
        main: '',
        description: '',
        icon: '',
    } as WeatherType,
    main: {
        temp: 0,
        feels_like: 0,
        temp_min: 0,
        temp_max: 0,
        pressure: 0,
        humidity: 0,
        sea_level: 0,
        grnd_level: 0,
    } as MainType,
    name: '' as string,
    isFetching: false
}

export type InitialStateType = typeof initialState

export const weatherReducer = (state = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case GET_WEATHER_SUCCESS: {
            return {...state, ...action.payload}
        }
        case START_FETCHING: {
            return {...state, isFetching: true}
        }
        case END_FETCHING: {
            return {...state, isFetching: false}
        }
        default: {
            return state
        }
    }
}

export const getWeather = (city: string = 'Тараз') => async (dispatch: Dispatch) => {
    dispatch(startFetching())
    const response = await weatherApi.getWeather(city)
    const payload: PayloadType = {
        weather: response.weather[0],
        main: response.main,
        name: response.name,
    }
    dispatch(getWeatherSuccess(payload))
    dispatch(endFetching())
}

export type PayloadType = {
    weather: WeatherType,
    main: MainType,
    name: string
}

type ActionType = {
    type: ActionTypes | GeneralActionTypes
    payload: InitialStateType
}