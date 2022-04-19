import React, {useCallback, useEffect} from 'react'
import s from './Header.module.scss'
import {GlobalSvgSelector} from '../../assets/icons/GlobalSvgSelector';
import Select from 'react-select';
import {UseTheme} from '../../hooks/useTheme';
import {ChangeCssRoot} from './ChangeCssRoot';
import {Storage} from '../../Storage';

export type ThemeTypes = 'light' | 'dark'

export const Header = React.memo(() => {

    const selectOptions = [
        {value: 'city-1', label: 'Minsk'},
        {value: 'city-2', label: 'Vilnius'},
        {value: 'city-3', label: 'Warshaw'},
    ]

    const selectStyles = {
        control: (styles: any) => ({
            ...styles,
            backgroundColor: theme.theme === 'light' ? 'rgba(71, 147, 255, 0.2)' : '#4f4f4f',
            borderRadius: '10px',
            width: '194px',
            height: '37px',
            border: 'none',
            zIndex: 100
        }),
        singleValue: (styles: any) => ({
            ...styles,
            color: theme.theme === 'light' ? '#000' : '#fff',
        })
    }

    const theme = UseTheme()

    const changeTheme = useCallback(() => {
        theme.changeTheme(theme.theme === 'light' ? 'dark' : 'light')
    }, [theme])

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
                <Select options={selectOptions} styles={selectStyles} defaultValue={selectOptions[0]}/>
            </div>
        </header>
    )
})