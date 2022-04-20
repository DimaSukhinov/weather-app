import React from 'react'
import s from './ThisDayInfo.module.scss'
import cloudWeather from '../../../assets/images/cloudWeather.png'
import {ThisDayItem} from '../thisDayItem/ThisDayItem';
import {WeatherType} from '../../../store/types';

export type IconIdType = 'TEMP' | 'PRESSURE' | 'HUMIDITY' | 'WIND'

export type itemsType = {
    iconId: IconIdType
    name: string
    value: string
}

type ThisDayInfoType = {
    weatherDay: WeatherType
}

export const ThisDayInfo = React.memo((props: ThisDayInfoType) => {

    const items: itemsType[] = [
        {
            iconId: 'TEMP',
            name: 'Temperature',
            value: `${Math.ceil(props.weatherDay.main.temp)}° - feels like ${Math.ceil(props.weatherDay.main.feels_like)}°`
        },
        {iconId: 'PRESSURE', name: 'Pressure', value: `${props.weatherDay.main.pressure} mmHg`},
        {iconId: 'HUMIDITY', name: 'Humidity', value: `${props.weatherDay.main.humidity}%`},
        {iconId: 'WIND', name: 'Wind', value: `${props.weatherDay.wind.speed} m/s`}
    ]

    return (
        <div className={s.thisDayInfo}>
            <div className={s.thisDayItems}>
                {
                    items.map((i) => {
                        return <ThisDayItem key={i.iconId} items={i}/>
                    })
                }
            </div>
            <img src={cloudWeather} alt="cloud weather" className={s.cloudImg}/>
        </div>
    )
})