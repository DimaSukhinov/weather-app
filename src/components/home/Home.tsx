import React from 'react'
import s from './Home.module.scss'
import {ThisDay} from '../thisDay/ThisDay'
import {ThisDayInfo} from '../thisDayInfo/ThisDayInfo'
import {Days} from '../days/Days'
import {WeatherType} from '../../store/weather-reducer'

type HomePropsType = {
    city: string
    weather: WeatherType
}

export const Home = React.memo((props: HomePropsType) => {
    return (
        <div className={s.home}>
            <div className={s.homeWrapper}>
                <ThisDay weatherDay={props.weather.weatherDay}/>
                <ThisDayInfo weatherDay={props.weather.weatherDay}/>
            </div>
            <Days days={props.weather.weatherForFewDays.forecast.forecastday}/>
        </div>
    )
})