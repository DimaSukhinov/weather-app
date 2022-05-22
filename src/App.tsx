import React, {ChangeEvent, KeyboardEvent, useCallback, useEffect, useState} from 'react'
import {Home} from './components/home/Home'
import {Header} from './common/header/Header'
import {CityStorage} from './Storage'
import {useDispatch} from 'react-redux'
import {setCurrentWeatherTC, setWeatherForFewDaysTC} from './store/weather-reducer'
import {useAppSelector} from './store/Store'
import {ErrorSnackbar} from './common/ErrorSnackbar'

export type SelectOptionsType = {
    value: string,
    label: string
}

export const App = React.memo(() => {

    const dispatch = useDispatch()
    const [currentCity, setCurrentCity] = useState<string>(CityStorage.getItem('currentCity') || 'Minsk')
    const [search, setSearch] = useState<string>('')
    const weather = useAppSelector(state => state.weather)

    useEffect(() => {
        // @ts-ignore
        dispatch(setCurrentWeatherTC(currentCity))
        // @ts-ignore
        dispatch(setWeatherForFewDaysTC(currentCity, 3))
    }, [currentCity, dispatch])

    const selectOptions: SelectOptionsType[] = [
        {value: 'Minsk', label: 'Minsk'},
        {value: 'Warsaw', label: 'Warsaw'},
        {value: 'Miami', label: 'Miami'},
    ]

    const onCurrentCityChange = useCallback((newValue: string) => setCurrentCity(newValue), [])

    const onChangeSearchHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => setSearch(e.currentTarget.value), [])

    const onKeyPressHandler = useCallback((e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            setCurrentCity(search)
            setSearch('')
        }
    }, [search])

    return (
        <div className={'globalContainer'}>
            <div className={'container'}>
                <Header selectOptions={selectOptions} currentCity={currentCity}
                        onCurrentCityChange={onCurrentCityChange} onKeyPressHandler={onKeyPressHandler}
                        onChangeSearchHandler={onChangeSearchHandler} search={search}/>
                <Home weather={weather} city={currentCity}/>
                <ErrorSnackbar/>
            </div>
        </div>
    )
})