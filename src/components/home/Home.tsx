import React, {useEffect} from 'react'
import s from './Home.module.scss'
import {ThisDay} from '../thisDay/ThisDay'
import {ThisDayInfo} from '../thisDayInfo/ThisDayInfo'
import {Days} from '../days/Days'
import {useAppSelector} from '../../store/Store'
import {setWeatherTC} from '../../store/weather-reducer'
import {useDispatch} from 'react-redux'

type HomePropsType = {
    city: string
    openPopup: () => void
}

export const Home = React.memo((props: HomePropsType) => {

    const dispatch = useDispatch()
    const weather = useAppSelector(state => state.weather)

    useEffect(() => {
        // @ts-ignore
        dispatch(setWeatherTC(props.city))
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