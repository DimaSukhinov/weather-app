import axios, {AxiosResponse} from 'axios';
import {WeatherType} from '../store/types';

export class WeatherService {
    static getCurrentWeather(city: string): Promise<AxiosResponse<WeatherType>> {
        return axios.get<WeatherType>(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=c80979a8025e10b8119c549a58247313`)
    }
}