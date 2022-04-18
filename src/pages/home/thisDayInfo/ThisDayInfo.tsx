import React from 'react'
import s from './ThisDayInfo.module.scss'
import cloudWeather from '../../../assets/images/cloudWeather.png'
import {ThisDayItem} from '../thisDayItem/ThisDayItem';

export type IconIdType = 'TEMP' | 'PRESSURE' | 'PRECIPITATION' | 'WIND'

export type itemsType = {
    iconId: IconIdType
    name: string
    value: string
}

export const ThisDayInfo = () => {

    const items: itemsType[] = [
        {iconId: 'TEMP', name: 'Temperature', value: '20° - feels like 17°'},
        {iconId: 'PRESSURE', name: 'Pressure', value: '765 mmHg - normal'},
        {iconId: 'PRECIPITATION', name: 'Precipitation', value: 'No precipitation'},
        {iconId: 'WIND', name: 'Wind', value: '3 m/s southwest - light breeze'}
    ]

    return (
        <div className={s.thisDayInfo}>
            <div className={s.thisDayItems}>
                {
                    items.map((i) => {
                        return <ThisDayItem key={i.iconId} items={i} />
                    })
                }
            </div>
            <img src={cloudWeather} alt="cloud weather" className={s.cloudImg}/>
        </div>
    )
}