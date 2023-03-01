import { FetchWeatherFail, FetchWeatherSuccess } from '../actions';
import { createReducer, on } from '@ngrx/store';

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

    on(FetchWeatherFail, (state) => ({
        ...state,
        loading: true
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
