import React from 'react'
import s from './ThisDay.module.scss'
import {GlobalSvgSelector} from '../../../assets/icons/GlobalSvgSelector';

export const ThisDay = React.memo(() => {
    return (
        <div className={s.thisDay}>
            <div className={s.topBlock}>
                <div className={s.topBlockWrapper}>
                    <div className={s.thisTemp}>20°</div>
                    <div className={s.thisDayName}>Today</div>
                </div>
                <GlobalSvgSelector id={'SUNNY-WEATHER'}/>
            </div>
            <div className={s.bottomBlock}>
                <div className={s.thisTime}>Time: <span>21:54</span></div>
                <div className={s.thisCity}>City: <span>Minsk</span></div>
            </div>
        </div>
    )
})