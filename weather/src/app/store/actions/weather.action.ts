import { createAction, props, Action } from "@ngrx/store";

export const FETCH_WEATHER = "fetch_weather";
export const FETCH_WEATHER_FAIL = "fetch_weather_fail";
export const FETCH_WEATHER_SUCCESS = "fetch_weather_success";


export class FetchWeather implements Action {
    readonly type = FETCH_WEATHER;
    constructor(public payload: any) { }
}



export const FetchWeatherFail = createAction(FETCH_WEATHER_FAIL, props<{ payload: any }>());
export const FetchWeatherSuccess = createAction(FETCH_WEATHER_SUCCESS, props<{ payload: any }>());



