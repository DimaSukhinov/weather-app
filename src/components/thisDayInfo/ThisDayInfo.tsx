import React from 'react'
import s from './ThisDayInfo.module.scss'
import cloudWeather from '../../assets/images/cloudWeather.png'
import {ThisDayItem} from '../thisDayItem/ThisDayItem'
import {CurrentWeatherType} from '../../api/weather-api'

export type IconIdType = 'TEMP' | 'PRESSURE' | 'HUMIDITY' | 'WIND'

export type itemsType = {
    iconId: IconIdType
    name: string
    value: string
}

type ThisDayInfoType = {
    weatherDay: CurrentWeatherType
}

export const ThisDayInfo = React.memo((props: ThisDayInfoType) => {

    const items: itemsType[] = [
        {
            iconId: 'TEMP',
            name: 'Temperature',
            value: `${Math.ceil(props.weatherDay.current.temp_c)}° - feels like ${Math.ceil(props.weatherDay.current.feelslike_c)}°`
        },
        {iconId: 'PRESSURE', name: 'Pressure', value: `${props.weatherDay.current.pressure_mb} mmHg`},
        {iconId: 'HUMIDITY', name: 'Humidity', value: `${props.weatherDay.current.humidity}%`},
        {iconId: 'WIND', name: 'Wind', value: `${props.weatherDay.current.wind_kph} m/s`}
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