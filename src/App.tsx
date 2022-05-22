import React, {useCallback, useEffect, useState} from 'react'
import {Home} from './components/home/Home'
import {Header} from './common/header/Header'
import {CityStorage} from './Storage'
import {Popup} from './common/popup/Popup'

export type CitiesType = 'Minsk' | 'Warsaw' | 'Dallas' | 'Miami'

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
        {value: 'Miami', label: 'Miami'},
    ]
    const onCurrentCityChange = useCallback((newValue: any) => setCurrentCity(newValue), [])

    useEffect(() => CityStorage.setItem('currentCity', currentCity), [currentCity])

    const openPopup = useCallback(() => setPopup(true), [])

    const closePopup = useCallback(() => setPopup(false), [])

    return (
        <div className={'globalContainer'}>
            {popup ? <Popup popup={popup} closePopup={closePopup}/> : ''}
            <div className={'container'}>
                <Header selectOptions={selectOptions} currentCity={currentCity}
                        onCurrentCityChange={onCurrentCityChange}/>
                <Home city={currentCity} openPopup={openPopup}/>
            </div>
        </div>
    )
})