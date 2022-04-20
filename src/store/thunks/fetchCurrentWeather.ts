import {AppDispatch} from '../Store';
import {WeatherService} from '../../axios/WeatherService';
import {currentWeatherSlice} from '../slices/CurrentWeather';

export const fetchCurrentWeather = (payload: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(currentWeatherSlice.actions.fetchCurrentWeather())
        const res = await WeatherService.getCurrentWeather(payload)
        if (res.status === 200) {
            dispatch(currentWeatherSlice.actions.fetchCurrentWeatherSuccess(res))
        } else {
            currentWeatherSlice.actions.fetchCurrentWeatherError(res)
        }
    }
    catch (error) {
        console.log('Error')
    }
}
