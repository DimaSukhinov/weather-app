import React from 'react'
import s from './Days.module.scss'
import {Card} from './Card';
import {Tabs} from './Tabs';

export type IconIdTypes = '01d' | '01n' | '02d' | '02n' | '03d' | '03n' | '04d' | '04n'
    | '09d' | '09n' | '10d' | '10n' | '11d' | '11n' | '13d' | '13n' | '50d' | '50n' | ''

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
            iconId: '01d',
            tempDay: '+18',
            tempNight: '+15',
            info: 'Сloudy'
        },
        {
            day: 'Tomorrow',
            date: '18 apr',
            iconId: '10d',
            tempDay: '+18',
            tempNight: '+15',
            info: 'Light rain and sunshine'
        },
        {
            day: 'Wed',
            date: '19 apr',
            iconId: '09d',
            tempDay: '+18',
            tempNight: '+15',
            info: 'Small rain'
        },
        {
            day: 'Thu',
            date: '20 apr',
            iconId: '04d',
            tempDay: '+18',
            tempNight: '+15',
            info: 'Mainly cloudy'
        },
        {
            day: 'Fri',
            date: '21 apr',
            iconId: '09d',
            tempDay: '+18',
            tempNight: '+15',
            info: 'Rainy'
        },
        {
            day: 'Sat',
            date: '22 apr',
            iconId: '01d',
            tempDay: '+18',
            tempNight: '+15',
            info: 'Rainy'
        },
        {
            day: 'Sun',
            date: '23 apr',
            iconId: '10d',
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
                        return <Card key={d.day} days={d}/>
                    })
                }
            </div>
        </>
    )
})