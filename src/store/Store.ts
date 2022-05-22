import {combineReducers, configureStore} from '@reduxjs/toolkit'
import {TypedUseSelectorHook, useSelector} from 'react-redux'
import {WeatherReducer} from './weather-reducer'

const rootReducer = combineReducers({
    weather: WeatherReducer
})

export type AppRootStateType = ReturnType<typeof rootReducer>

export const Store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: false
    })
})

export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector