import {APIInstance} from "./base";
import axios from "axios";

type WeatherResponseType = {
    coord: {
        lon: number,
        lat: number,
    },
    weather: [
        {
            id: number,
            main: string,
            description: string,
            icon: string,
        }
    ],
    base: string,
    main: {
        temp: number,
        feels_like: number,
        temp_min: number,
        temp_max: number,
        pressure: number,
        humidity: number,
        sea_level: number,
        grnd_level: number,
    },
    visibility: number,
    wind: {
        speed: number,
        deg: number,
        gust: number,
    },
    clouds: {
        all: number
    },
    dt: number,
    sys: {
        country: string,
        sunrise: number,
        sunset: number,
    },
    timezone: number,
    id: number,
    name: string,
    cod: number,
}


export const weatherApi = {
    getWeather: (city: string) => {
            return axios.get<WeatherResponseType>(`https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&appid=a872f78cae30a043d03c0f3f5aa46bbd`).then(r => r.data)
    },
}