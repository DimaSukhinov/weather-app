import React from 'react'
import s from './Days.module.scss'

type buttonsType = {
    value: string
}

export const Tabs = React.memo(() => {

    const buttons: buttonsType[] = [
        {value: 'For a week'},
        {value: 'For 10 days'},
        {value: 'For a month'},
    ]

    return (
        <div className={s.tabs}>
            <div className={s.tabsWrapper}>
                {
                    buttons.map((tab) => {
                        return <div key={tab.value} className={s.tab}>
                            {tab.value}
                        </div>
                    })
                }
            </div>
            <div className={s.cancel}>
                Cancel
            </div>
        </div>
    )
})