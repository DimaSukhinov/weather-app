import React, {useCallback, useEffect, useState} from 'react';
import {Home} from './pages/home/Home';
import {Header} from './common/header/Header';
import {Popup} from './common/popup/Popup';
import {CityStorage} from './Storage';

export type CitiesType = 'Minsk' | 'Warsaw' | 'Miami'

export type SelectOptionsType = {
    value: CitiesType,
    label: CitiesType
}

export const App = React.memo(() => {

    const [currentCity, setCurrentCity] = useState<CitiesType>(CityStorage.getItem('currentCity') || 'Minsk')

    const selectOptions: SelectOptionsType[] = [
        {value: 'Minsk', label: 'Minsk'},
        {value: 'Miami', label: 'Miami'},
        {value: 'Warsaw', label: 'Warsaw'},
]
    const onCurrentCityChange = useCallback((newValue: any) => {
        setCurrentCity(newValue)
    }, [])

    useEffect(() => {
        CityStorage.setItem('currentCity', currentCity)
    }, [currentCity])

    return (
        <div className={'globalContainer'}>
            {/*<Popup/>*/}
            <div className={'container'}>
                <Header selectOptions={selectOptions} currentCity={currentCity}
                        onCurrentCityChange={onCurrentCityChange}/>
                <Home city={currentCity}/>
            </div>
        </div>
    )
})