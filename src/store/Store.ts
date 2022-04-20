import {combineReducers, configureStore} from '@reduxjs/toolkit';
import currentWeatherSliceReducer from './slices/CurrentWeather';

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = typeof Store
export type AppDispatch = AppStore['dispatch']

const rootReducer = combineReducers({
    currentWeatherSliceReducer,
})

export const Store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: false
    })
})