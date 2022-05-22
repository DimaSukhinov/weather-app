import axios from 'axios'

export const instance = axios.create({
    baseURL: 'https://api.weatherapi.com/v1/'
})

export const weatherAPI = {
    currentWeather(city: string) {
        return instance.get<CurrentWeatherType>(`current.json?key=f993889e14d7490dbb984527222205&q=${city}`)
    },
    weatherForFewDays(city: string, days: number) {
        return instance.get<weatherForFewDaysType>(`forecast.json?key=f993889e14d7490dbb984527222205&q=${city}&days=${days}`)
    }
}

export type CurrentWeatherType = {
    location: {
        name: string
        localtime: string
    },
    current: {
        feelslike_c: number
        temp_c: number
        pressure_mb: number
        humidity: number
        wind_kph: number
        condition: {
            icon: string
        }
    },
}

export type weatherForFewDaysType = {
    location: {
        name: string
        localtime: string
    },
    forecast: {
        forecastday: DayForecastType[],
    }
}

export type DayForecastType = {
    date: string,
    day: {
        maxtemp_c: number
        mintemp_c: number
        condition: {
            text: string
            icon: string
        }
    }
}