import React from 'react'
import s from './ThisDayItem.module.scss'
import {itemsType} from '../thisDayInfo/ThisDayInfo';
import {GlobalSvgSelector} from '../../../assets/icons/GlobalSvgSelector';

type itemPropsType = {
    items: itemsType
}

export const ThisDayItem = React.memo((props: itemPropsType) => {
    return (
        <div className={s.thisDayItem}>
            <div className={s.logo}>
                <GlobalSvgSelector id={props.items.iconId}/>
            </div>
            <div className={s.name}>{props.items.name}</div>
            <div className={s.value}>{props.items.value}</div>
        </div>
    )
})