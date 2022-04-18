import React from 'react'
import s from './Home.module.scss'
import {ThisDay} from './thisDay/ThisDay';
import {ThisDayInfo} from './thisDayInfo/ThisDayInfo';
import {Days} from './days/Days';

export const Home = () => {
    return (
        <div className={s.home}>
            <div className={s.homeWrapper}>
                <ThisDay/>
                <ThisDayInfo/>
            </div>
            <Days/>
        </div>
    )
}