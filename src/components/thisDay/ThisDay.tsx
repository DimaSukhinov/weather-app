import React from 'react'
import s from './ThisDay.module.scss'
import {CurrentWeatherType} from '../../api/weather-api'

type ThisDayPropsType = {
    weatherDay: CurrentWeatherType
}

export const ThisDay = React.memo((props: ThisDayPropsType) => {
    return (
        <div className={s.thisDay}>
            <div className={s.topBlock}>
                <div className={s.topBlockWrapper}>
                    <div className={s.thisTemp}>{Math.ceil(props.weatherDay.current.temp_c)}°</div>
                    <div className={s.thisDayName}>Today</div>
                </div>
                <img src={props.weatherDay.current.condition.icon} alt="weatherIcon"/>
            </div>
            <div className={s.bottomBlock}>
                <div className={s.thisTime}>Time:
                    <span>
                        {props.weatherDay.location.localtime.slice(10)}
                    </span>
                </div>
                <div className={s.thisCity}>City: <span>{props.weatherDay.location.name}</span></div>
            </div>
        </div>
    )
})