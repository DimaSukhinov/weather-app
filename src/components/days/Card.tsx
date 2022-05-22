import React from 'react'
import s from './Days.module.scss'
import {DayForecastType} from '../../api/weather-api'

type CardPropsType = {
    days: DayForecastType
}

export const Card = React.memo((props: CardPropsType) => {
    return (
        <div className={s.card}>
            <div>
                <div className={s.day}>{props.days.date}</div>
                {/*<div className={s.date}>{props.days.date}</div>*/}
                <div className={s.img}>
                    <img src={props.days.day.condition.icon} alt="weatherIcon"/>
                </div>
                <div className={s.tempDay}>{Math.ceil(props.days.day.maxtemp_c)}°</div>
                <div className={s.tempNight}>{Math.ceil(props.days.day.mintemp_c)}°</div>
                <div className={s.info}>{props.days.day.condition.text}</div>
            </div>
        </div>
    )
})