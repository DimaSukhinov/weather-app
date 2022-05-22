import React from 'react'
import s from './Days.module.scss'
import {Card} from './Card'
import {DayForecastType} from '../../api/weather-api'

type DaysPropsType = {
    days: DayForecastType[]
}

export const Days = React.memo((props: DaysPropsType) => {
    return (
        <>
            <div className={s.tab}>
                <div className={s.tabsWrapper}>
                    <div className={s.tab}>For 3 days</div>
                </div>
            </div>
            <div className={s.days}>
                {
                    props.days.map(d => {
                        return <Card days={d}/>
                    })
                }
            </div>
        </>
    )
})