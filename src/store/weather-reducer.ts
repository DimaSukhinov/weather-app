import {AxiosError} from 'axios'
import {Dispatch} from 'redux'
import {CurrentWeatherType, weatherAPI, weatherForFewDaysType} from '../api/weather-api'
import {CityStorage} from '../Storage'

export type WeatherType = {
    weatherDay: CurrentWeatherType
    weatherForFewDays: weatherForFewDaysType
    error: string | null
}

const initialState: WeatherType = {
    weatherDay: {
        location: {
            name: '',
            localtime: '',
        },
        current: {
            feelslike_c: 0,
            temp_c: 0,
            pressure_mb: 0,
            humidity: 0,
            wind_kph: 0,
            condition: {
                icon: '',
            },
        },
    },
    weatherForFewDays: {
        location: {
            name: '',
            localtime: '',
        },
        forecast: {
            forecastday: [
                {
                    date: '',
                    day: {
                        maxtemp_c: 0,
                        mintemp_c: 0,
                        condition: {
                            text: '',
                            icon: '',
                        }
                    }
                }
            ]
        }
    },
    error: null,
}

type InitialStateType = typeof initialState

export const WeatherReducer = (state: InitialStateType = initialState, action: AppActionsType): InitialStateType => {
    switch (action.type) {
        case 'SET-CURRENT-WEATHER':
            return {...state, weatherDay: action.currentWeather}
        case 'SET-WEATHER-FOR-FEW-DAYS':
            return {...state, weatherForFewDays: action.weatherForFewDays}
        case 'SET-ERROR':
            return {...state, error: action.error}
        default:
            return state
    }
}

// actions
export const setCurrentWeatherAC = (currentWeather: CurrentWeatherType) => {
    return {type: 'SET-CURRENT-WEATHER', currentWeather} as const
}
export const setWeatherForFewDaysAC = (weatherForFewDays: weatherForFewDaysType) => {
    return {type: 'SET-WEATHER-FOR-FEW-DAYS', weatherForFewDays} as const
}
export const setAppErrorAC = (error: string | null) => {
    return {type: 'SET-ERROR', error} as const
}

// thunks
export const setCurrentWeatherTC = (city: string) => (dispatch: Dispatch) => {
    weatherAPI.currentWeather(city)
        .then((res) => {
            dispatch(setCurrentWeatherAC(res.data))
            CityStorage.setItem('currentCity', city)
        })
        .catch((err: AxiosError) => {
            dispatch(setAppErrorAC('No matching location found'))
        })
}
export const setWeatherForFewDaysTC = (city: string, days: number) => (dispatch: Dispatch) => {
    weatherAPI.weatherForFewDays(city, days)
        .then((res) => {
            dispatch(setWeatherForFewDaysAC(res.data))
        })
}

type AppActionsType =
    ReturnType<typeof setCurrentWeatherAC>
    | ReturnType<typeof setWeatherForFewDaysAC>
    | ReturnType<typeof setAppErrorAC>