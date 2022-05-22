import { Dispatch } from 'redux'
import {weatherAPI, WeatherType} from '../api/weather-api'

type CurrentWeatherType = {
    weatherDay: WeatherType
}

const initialState = {
    weatherDay: {
        main: {
            feels_like: 0,
            temp: 0,
            pressure: 0,
            humidity: 0,
        },
        name: '',
        wind: {
            speed: 0
        },
        weather: [
            {
                icon: ''
            }
        ]
    },
}

type InitialStateType = typeof initialState

export const WeatherReducer = (state: InitialStateType = initialState, action: AppActionsType): InitialStateType => {
    switch (action.type) {
        case 'SET-CURRENT-WEATHER':
            return {...state, weatherDay: action.currentWeather}
        default:
            return state
    }
}

// actions
export const setCurrentWeatherAC = (currentWeather: WeatherType) => {
    return {type: 'SET-CURRENT-WEATHER', currentWeather} as const
}

// thunks
export const setWeatherTC = (city: string) => (dispatch: Dispatch) => {
    weatherAPI.currentWeather(city)
        .then((res) => {
            dispatch(setCurrentWeatherAC(res.data))
    })
}

type AppActionsType = ReturnType<typeof setCurrentWeatherAC>