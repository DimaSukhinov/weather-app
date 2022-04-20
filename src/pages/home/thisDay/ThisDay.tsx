import React from 'react'
import s from './ThisDay.module.scss'
import {GlobalSvgSelector} from '../../../assets/icons/GlobalSvgSelector';
import {WeatherType} from '../../../store/types';

type ThisDayPropsType = {
    weatherDay: WeatherType
}

export const ThisDay = React.memo((props: ThisDayPropsType) => {

    const data = new Date()

    return (
        <div className={s.thisDay}>
            <div className={s.topBlock}>
                <div className={s.topBlockWrapper}>
                    <div className={s.thisTemp}>{Math.ceil(props.weatherDay.main.temp)}°</div>
                    <div className={s.thisDayName}>Today</div>
                </div>
                <GlobalSvgSelector id={`${props.weatherDay.weather[0].icon}`}/>
            </div>
            <div className={s.bottomBlock}>
                <div className={s.thisTime}>Time:
                    <span>
                        {props.weatherDay.name === 'Minsk' ? ` ${data.getHours()}:${data.getMinutes() < 10 ? `0${data.getMinutes()}` : `${data.getMinutes()}`}` : ''}
                        {props.weatherDay.name === 'Dallas' ? ` ${data.getHours() - 7}:${data.getMinutes() < 10 ? `0${data.getMinutes()}` : `${data.getMinutes()}`}` : ''}
                        {props.weatherDay.name === 'Warsaw' ? ` ${data.getHours() - 1}:${data.getMinutes() < 10 ? `0${data.getMinutes()}` : `${data.getMinutes()}`}` : ''}
                    </span>
                </div>
                <div className={s.thisCity}>City: <span>{props.weatherDay.name}</span></div>
            </div>
        </div>
    )
})