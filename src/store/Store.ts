import {TypedUseSelectorHook, useSelector} from 'react-redux'
import {WeatherReducer} from './weather-reducer'
import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    weather: WeatherReducer
})

export type AppRootStateType = ReturnType<typeof rootReducer>

export const Store = createStore(rootReducer, applyMiddleware(thunk))

export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector

// @ts-ignore
window.store = Store