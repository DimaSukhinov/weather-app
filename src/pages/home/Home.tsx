import React, {useEffect} from 'react'
import s from './Home.module.scss'
import {ThisDay} from './thisDay/ThisDay';
import {ThisDayInfo} from './thisDayInfo/ThisDayInfo';
import {Days} from './days/Days';
import {useCustomDispatch, useCustomSelector} from '../../hooks/Store';
import {fetchCurrentWeather} from '../../store/thunks/fetchCurrentWeather';

type HomePropsType = {
    city: string
    openPopup: () => void
}

export const Home = React.memo((props: HomePropsType) => {

    const dispatch = useCustomDispatch()
    const weather = useCustomSelector((state) => state.currentWeatherSliceReducer)

    useEffect(() => {
        dispatch(fetchCurrentWeather(props.city))
    }, [dispatch, props])

    return (
        <div className={s.home}>
            <div className={s.homeWrapper}>
                <ThisDay weatherDay={weather.weatherDay}/>
                <ThisDayInfo weatherDay={weather.weatherDay}/>
            </div>
            <Days openPopup={props.openPopup}/>
        </div>
    )
})