import React, {useCallback, useEffect, useState} from 'react'
import s from './Header.module.scss'
import {GlobalSvgSelector} from '../../assets/icons/GlobalSvgSelector';
import Select from 'react-select';
import {CitiesType, SelectOptionsType} from '../../App';
import {CityStorage, ThemeStorage} from '../../Storage';
import {ChangeCssRoot} from './ChangeCssRoot';

export type ThemeTypes = 'light' | 'dark'

type HeaderPropsType = {
    selectOptions: SelectOptionsType[]
    currentCity: CitiesType
    onCurrentCityChange: (newValue: any) => void
}

export const Header = React.memo((props: HeaderPropsType) => {

    const selectStyles = {
        control: (styles: any) => ({
            ...styles,
            backgroundColor: theme === 'light' ? 'rgba(71, 147, 255, 0.2)' : '#4f4f4f',
            borderRadius: '10px',
            width: '194px',
            height: '37px',
            border: 'none',
            zIndex: 100
        }),
        singleValue: (styles: any) => ({
            ...styles,
            color: theme === 'light' ? '#000' : '#fff',
        })
    }

    const [theme, setTheme] = useState<ThemeTypes>(ThemeStorage.getItem('theme') || 'light')
    ChangeCssRoot(theme)

    const changeTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light'
        setTheme(newTheme)
        ChangeCssRoot(newTheme)
        ThemeStorage.setItem('theme', newTheme)
    }

    const onCityChange = useCallback((newValue: any) => {
        props.onCurrentCityChange(newValue.value)
    }, [props])

    const getValue = () => {
        return props.currentCity ? props.selectOptions.find(c => c.value === props.currentCity) : ''
    }

    return (
        <header className={s.header}>
            <div className={s.wrapper}>
                <div className={s.logo}>
                    <GlobalSvgSelector id={'HEADER-LOGO'}/>
                </div>
                <div className={s.title}>React weather</div>
            </div>
            <div className={s.wrapper}>
                <div className={s.changeTheme} onClick={changeTheme}>
                    <GlobalSvgSelector id={'CHANGE-THEME-LOGO'}/>
                </div>
                <Select options={props.selectOptions} styles={selectStyles} onChange={onCityChange}
                        defaultValue={getValue()}/>
            </div>
        </header>
    )
})