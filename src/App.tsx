import React from 'react';
import {Route, Navigate, Routes} from 'react-router-dom';
import {Home} from './pages/home/Home';
import {MonthStatistics} from './pages/monthStatistics/MonthStatistics';
import {Header} from './common/header/Header';
import {Popup} from './common/popup/Popup';

export const App = React.memo(() => {
    return (
        <div className={'globalContainer'}>
            {/*<Popup/>*/}
            <div className={'container'}>
                <Header/>
                <Routes>
                    <Route path={'/'} element={<Navigate to={'/home'}/>}/>
                    <Route path={'/home'} element={<Home/>}/>
                    <Route path={'/month-statistics'} element={<MonthStatistics/>}/>
                </Routes>
            </div>
        </div>
    )
})