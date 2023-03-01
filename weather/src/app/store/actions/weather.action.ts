import { Action, createAction, props } from "@ngrx/store";

export const FETCH_WEATHER = "fetch_weather";
export const FETCH_WEATHER_FAIL = "fetch_weather_fail";
export const FETCH_WEATHER_SUCCESS = "fetch_weather_success";


export const FetchWeather = createAction(FETCH_WEATHER);

export const FetchWeatherFail = createAction(FETCH_WEATHER_FAIL);

export const FetchWeatherSuccess = createAction(FETCH_WEATHER_SUCCESS, props<{ payload: any }>());
