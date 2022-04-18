import React from 'react'
import s from './Days.module.scss'
import {DaysType} from './Days';
import {GlobalSvgSelector} from '../../../assets/icons/GlobalSvgSelector';

type CardPropsType = {
    days: DaysType
}

export const Card = (props: CardPropsType) => {
    return (
        <div className={s.card}>
            <div>
                <div className={s.day}>{props.days.day}</div>
                <div className={s.date}>{props.days.date}</div>
                <div className={s.img}>
                    <GlobalSvgSelector id={props.days.iconId}/>
                </div>
                <div className={s.tempDay}>{props.days.tempDay}</div>
                <div className={s.tempNight}>{props.days.tempNight}</div>
                <div className={s.info}>{props.days.info}</div>
            </div>
        </div>
    )
}