import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import * as WeatherActions from "../actions/weather.action";
import { Action } from "@ngrx/store";
import { switchMap, map, catchError } from 'rxjs/operators';
import { WeatherService } from "../../weather.service";
import { Observable, of } from "rxjs";

@Injectable()
export class WeatherEffects {
    constructor(private actions$: Actions, private weatherService: WeatherService) { }
    loadWeather$ = createEffect(() => this.actions$.pipe(
        ofType(WeatherActions.FetchWeather),
        switchMap((action: any) => {
            return this.weatherService.getWeatherData(action.payload).pipe(
                map(data => ({ type: WeatherActions.FETCH_WEATHER_SUCCESS, payload: data })),
                catchError((err) => {
                    return of(WeatherActions.FetchWeatherFail);
                })

            );

        })
    )
    )
}