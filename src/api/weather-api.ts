import axios from 'axios'
import {IconIdTypes} from '../components/days/Days'

export const instance = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5/'
})

export const weatherAPI = {
    currentWeather(city: string) {
        return instance.get<WeatherType>(`weather?q=${city}&units=metric&appid=c80979a8025e10b8119c549a58247313`)
    }
}

export type WeatherType = {
    main: {
        feels_like: number
        temp: number
        pressure: number
        humidity: number
    },
    name: string,
    wind: {
        speed: number
    },
    weather: [
        {
            icon: IconIdTypes
        }
    ]
}