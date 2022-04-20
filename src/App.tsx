import React, {useCallback, useEffect, useState} from 'react';
import {Home} from './pages/home/Home';
import {Header} from './common/header/Header';
import {CityStorage} from './Storage';
import {Popup} from './common/popup/Popup';

export type CitiesType = 'Minsk' | 'Warsaw' | 'Dallas'

export type SelectOptionsType = {
    value: CitiesType,
    label: CitiesType
}

export const App = React.memo(() => {

    const [currentCity, setCurrentCity] = useState<CitiesType>(CityStorage.getItem('currentCity') || 'Minsk')
    const [popup, setPopup] = useState<boolean>(false)

    const selectOptions: SelectOptionsType[] = [
        {value: 'Minsk', label: 'Minsk'},
        {value: 'Dallas', label: 'Dallas'},
        {value: 'Warsaw', label: 'Warsaw'},
    ]
    const onCurrentCityChange = useCallback((newValue: any) => {
        setCurrentCity(newValue)
    }, [])

    useEffect(() => {
        CityStorage.setItem('currentCity', currentCity)
    }, [currentCity])

    const openPopup = useCallback(() => {
        setPopup(true)
    }, [])

    const closePopup = useCallback(() => {
        setPopup(false)
    }, [])

    return (
        <div className={'globalContainer'} onClick={e => (e.currentTarget === e.target) && closePopup()}>
            {popup ? <Popup popup={popup} closePopup={closePopup}/> : ''}
            <div className={'container'}>
                <Header selectOptions={selectOptions} currentCity={currentCity}
                        onCurrentCityChange={onCurrentCityChange}/>
                <Home city={currentCity} openPopup={openPopup}/>
            </div>
        </div>
    )
})