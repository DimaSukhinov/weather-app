import React, {ChangeEvent, KeyboardEvent, useCallback, useState} from 'react'
import s from './Header.module.scss'
import {GlobalSvgSelector} from '../../assets/icons/GlobalSvgSelector'
import Select from 'react-select'
import {SelectOptionsType} from '../../App'
import {ThemeStorage} from '../../Storage'
import {ChangeCssRoot} from './ChangeCssRoot'
import InputBase from '@material-ui/core/InputBase'
import {createStyles, makeStyles, Theme} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'

export type ThemeTypes = 'light' | 'dark'

type HeaderPropsType = {
    selectOptions: SelectOptionsType[]
    currentCity: string
    search: string
    onCurrentCityChange: (newValue: any) => void
    onChangeSearchHandler: (e: ChangeEvent<HTMLInputElement>) => void
    onKeyPressHandler: (e: KeyboardEvent<HTMLInputElement>) => void
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        search: {
            position: 'relative',
            borderRadius: theme.shape.borderRadius,
            marginRight: theme.spacing(2),
            marginLeft: 0,
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                marginLeft: theme.spacing(3),
                width: 'auto',
            },
        },
        searchIcon: {
            padding: theme.spacing(0, 2),
            height: '100%',
            position: 'absolute',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        inputInput: {
            padding: theme.spacing(1, 1, 1, 0),
            paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('md')]: {
                width: '20ch',
            },
        },
    }),
)

export const Header = React.memo((props: HeaderPropsType) => {

    const [theme, setTheme] = useState<ThemeTypes>(ThemeStorage.getItem('theme') || 'dark')
    const classes = useStyles()
    ChangeCssRoot(theme)

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

    const changeTheme = useCallback(() => {
        const newTheme = theme === 'light' ? 'dark' : 'light'
        setTheme(newTheme)
        ChangeCssRoot(newTheme)
        ThemeStorage.setItem('theme', newTheme)
    }, [theme])

    const onCityChange = useCallback((newValue: any) => props.onCurrentCityChange(newValue.value), [props])

    const getValue = useCallback(() => {
        return props.currentCity ? props.selectOptions.find(c => c.value === props.currentCity) : ''
    }, [props])

    return (
        <header className={s.header}>
            <div className={s.wrapper}>
                <div className={s.logo}>
                    <GlobalSvgSelector id={'HEADER-LOGO'}/>
                </div>
                <div className={s.title}>React weather
                    <span> powered by <a href="https://www.weatherapi.com/" title="Free Weather API">WeatherAPI.com</a></span>
                </div>
            </div>
            <div className={s.wrapper}>
                <div className={s.changeTheme} onClick={changeTheme}>
                    <GlobalSvgSelector id={'CHANGE-THEME-LOGO'}/>
                </div>
                <div className={classes.search}
                     style={{backgroundColor: theme === 'light' ? 'rgba(71, 147, 255, 0.2)' : '#4f4f4f'}}>
                    <div className={classes.searchIcon}>
                        <SearchIcon/>
                    </div>
                    <InputBase
                        placeholder="Search…"
                        classes={{input: classes.inputInput,}}
                        inputProps={{'aria-label': 'search'}}
                        onChange={props.onChangeSearchHandler}
                        onKeyPress={props.onKeyPressHandler}
                        value={props.search}
                    />
                </div>
                <Select options={props.selectOptions} styles={selectStyles} onChange={onCityChange}
                        defaultValue={getValue()}/>
            </div>
        </header>
    )
})