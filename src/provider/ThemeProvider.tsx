import React, {ReactNode, useState} from 'react';
import {ThemeContext} from '../context/ThemeContext';
import {ThemeTypes} from '../common/header/Header';
import {ChangeCssRoot} from '../common/header/ChangeCssRoot';
import {Storage} from '../Storage';

type ChildrenType = {
    children: ReactNode
}

export const ThemeProvider = React.memo(({children, ...props}: ChildrenType) => {

    const [theme, setTheme] = useState<ThemeTypes>(Storage.getItem('theme') || 'light')

    ChangeCssRoot(theme)

    const changeTheme = (theme: ThemeTypes) => {
        setTheme(theme)
        ChangeCssRoot(theme)
        Storage.setItem('theme', theme)
    }

    return <ThemeContext.Provider value={{theme, changeTheme}} {...props}>
        {children}
    </ThemeContext.Provider>
})