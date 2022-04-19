import {createContext} from 'react';
import {ThemeTypes} from '../common/header/Header';

type themeProps = {
    theme: ThemeTypes
    changeTheme: (theme: ThemeTypes) => void
}

export const ThemeContext = createContext<themeProps>({
    theme: 'light',
    changeTheme: () => {}
})