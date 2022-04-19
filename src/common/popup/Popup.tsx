import React from 'react'
import s from './Popup.module.scss'
import {ThisDayItem} from '../../pages/home/thisDayItem/ThisDayItem';
import {itemsType} from '../../pages/home/thisDayInfo/ThisDayInfo';
import {GlobalSvgSelector} from '../../assets/icons/GlobalSvgSelector';

export const Popup = React.memo(() => {

    const items: itemsType[] = [
        {iconId: 'TEMP', name: 'Temperature', value: '20° - feels like 17°'},
        {iconId: 'PRESSURE', name: 'Pressure', value: '765 mmHg - normal'},
        {iconId: 'PRECIPITATION', name: 'Precipitation', value: 'No precipitation'},
        {iconId: 'WIND', name: 'Wind', value: '3 m/s southwest - light breeze'}
    ]

    return (
        <>
            <div className={s.blur}></div>
            <div className={s.popup}>
                <div className={s.day}>
                    <div className={s.temp}>20°</div>
                    <div className={s.date}>Wednesday</div>
                    <div className={s.img}>
                        <GlobalSvgSelector id={'SUN'}/>
                    </div>
                    <div className={s.time}>Time: <span>21:54</span></div>
                    <div className={s.city}>City: <span>Minsk</span></div>
                </div>
                <div className={s.thisDayItems}>
                    {
                        items.map((i) => {
                            return <ThisDayItem key={i.iconId} items={i}/>
                        })
                    }
                </div>
                <div className={s.close}>
                    <GlobalSvgSelector id={'CLOSE'}/>
                </div>
            </div>
        </>
    )
})