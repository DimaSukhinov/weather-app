import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {WeatherType} from '../types';
import {AxiosResponse} from 'axios';

type CurrentWeatherType = {
    weatherDay: WeatherType
    isLoading: boolean
    response: responseType
}

type responseType = {
    status: number
    message: string
}

const initialState: CurrentWeatherType = {
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
    isLoading: false,
    response: {
        status: 0,
        message: ''
    },
}

export const currentWeatherSlice = createSlice({
    name: 'currentWeather',
    initialState,
    reducers: {
        fetchCurrentWeather(state) {
            state.isLoading = true
        },
        fetchCurrentWeatherSuccess(state, action: PayloadAction<AxiosResponse<WeatherType>>) {
            state.isLoading = false
            state.weatherDay = action.payload.data
            state.response = {
                status: action.payload.status,
                message: action.payload.statusText
            }
        },
        fetchCurrentWeatherError(state, action: PayloadAction<AxiosResponse<WeatherType>>) {
            state.isLoading = false
            state.response = {
                status: action.payload.status,
                message: action.payload.statusText
            }
        }
    }
})

export default currentWeatherSlice.reducer