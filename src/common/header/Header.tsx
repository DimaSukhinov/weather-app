import React, {useEffect, useState} from 'react'
import s from './Header.module.scss'
import {GlobalSvgSelector} from '../../assets/icons/GlobalSvgSelector';
import Select from 'react-select';

type themeTypes = 'light' | 'dark'

export const Header = () => {

    const selectOptions = [
        {value: 'city-1', label: 'Minsk'},
        {value: 'city-2', label: 'Vilnius'},
        {value: 'city-3', label: 'Warshaw'},
    ]

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

    const [theme, setTheme] = useState<themeTypes>('light')

    useEffect(() => {
        const root = document.querySelector(':root') as HTMLElement

        const components = ['bodyBackground', 'componentsBackground', 'cardBackground', 'cardShadow', 'textColor']

        components.forEach((components) => {
            root.style.setProperty(`--${components}Default`, `var(--${components}-${theme})`)
        })
    }, [theme])

    const changeTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
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
                <Select options={selectOptions} styles={selectStyles} defaultValue={selectOptions[0]}/>
            </div>
        </header>
    )
}