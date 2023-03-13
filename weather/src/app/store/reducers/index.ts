
import { ActionReducerMap, createSelector, createFeatureSelector } from "@ngrx/store";

import * as weatherReducer from "./weather.reducer";


export interface State {
    weather: weatherReducer.WeatherState
}

export const reducers: ActionReducerMap<State> = {
    weather: weatherReducer.reducer
}


export const selectWeatherState = createFeatureSelector<weatherReducer.WeatherState>("weather");

export const getWeatherStateData = createSelector(selectWeatherState, weatherReducer.getWeatherData);
export const getWeatherStateLoading = createSelector(selectWeatherState, weatherReducer.getWeatherLoading);
export const getWeatherStateLoaded = createSelector(selectWeatherState, weatherReducer.getWeatherLoaded);
