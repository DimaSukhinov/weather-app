import React from 'react'
import s from './Days.module.scss'
import {Card} from './Card';
import {Tabs} from './Tabs';

export type IconIdTypes = 'SUN' | 'SMALL-RAIN-SUN' | 'SMALL-RAIN' | 'MAINLY-CLOUDY' | 'RAINY'

export type DaysType = {
    day: string
    date: string
    iconId: IconIdTypes
    tempDay: string
    tempNight: string
    info: string
}

export const Days = React.memo(() => {

    const days: DaysType[] = [
        {
            day: 'Today',
            date: '17 apr',
            iconId: 'SUN',
            tempDay: '+18',
            tempNight: '+15',
            info: 'Сloudy'
        },
        {
            day: 'Tomorrow',
            date: '18 apr',
            iconId: 'SMALL-RAIN-SUN',
            tempDay: '+18',
            tempNight: '+15',
            info: 'Light rain and sunshine'
        },
        {
            day: 'Wed',
            date: '19 apr',
            iconId: 'SMALL-RAIN',
            tempDay: '+18',
            tempNight: '+15',
            info: 'Small rain'
        },
        {
            day: 'Thu',
            date: '20 apr',
            iconId: 'MAINLY-CLOUDY',
            tempDay: '+18',
            tempNight: '+15',
            info: 'Mainly cloudy'
        },
        {
            day: 'Fri',
            date: '21 apr',
            iconId: 'RAINY',
            tempDay: '+18',
            tempNight: '+15',
            info: 'Rainy'
        },
        {
            day: 'Sat',
            date: '22 apr',
            iconId: 'SUN',
            tempDay: '+18',
            tempNight: '+15',
            info: 'Rainy'
        },
        {
            day: 'Sun',
            date: '23 apr',
            iconId: 'SMALL-RAIN-SUN',
            tempDay: '+18',
            tempNight: '+15',
            info: 'Rainy'
        },
    ]

    return (
        <>
            <Tabs/>
            <div className={s.days}>
                {
                    days.map((d) => {
                        return <Card days={d}/>
                    })
                }
            </div>
        </>
    )
})