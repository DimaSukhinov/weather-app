import {IconIdTypes} from '../pages/home/days/Days';

export type WeatherType = {
    main: {
        feels_like: number
        temp: number
        pressure: number
        humidity: number
    },
    name: string,
    wind: {
        speed: number
    },
    weather: [
        {
            icon: IconIdTypes
        }
    ]
}