import { FetchWeather, FetchWeatherFail, FetchWeatherSuccess } from '../actions';
import { createReducer, on } from '@ngrx/store';
import * as weatherActions from "../actions/weather.action"

export interface WeatherState {
    data: Object,
    loaded: boolean,
    loading: boolean
}

export const initialState: WeatherState = {
    data: {},
    loaded: false,
    loading: false
}

export const reducer = createReducer(
    initialState,
    on(FetchWeatherSuccess, (state, { payload }) => ({
        ...state,
        data: payload,
        loaded: true
    })),

    on(FetchWeatherFail, (state, { payload }) => ({
        ...state,
        loading: false,
        loaded: false,
        data: payload
    }))
)

export const getWeatherLoading = (state: WeatherState) => {
    return state.loading;
}
export const getWeatherLoaded = (state: WeatherState) => {
    return state.loaded;
}
export const getWeatherData = (state: WeatherState) => {
    return state.data;
}
