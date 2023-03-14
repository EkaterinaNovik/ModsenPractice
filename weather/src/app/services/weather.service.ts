import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

import { MessageService } from './message.service';
import { CurrentWeather } from '../models/current-weather';
import { Forecast } from '../models/forecast';

@Injectable({
    providedIn: 'root'
})
export class WeatherService {

    constructor(private httpClient: HttpClient, private messageService: MessageService) { }
    getWeatherByCity(city: string) {
        return this.httpClient.get<CurrentWeather[]>(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric`).pipe(
            catchError(err => {
                return throwError(() => new Error(err));
            })
        );
    }

    SevenDayForecast(city: string) {
        return this.httpClient.get<Forecast[]>(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric`).pipe(
            catchError(err => {
                return throwError(() => new Error(err));
            })
        );
    }

    log(message: string) {
        this.messageService.add(`${message}`);
    }

    getWeatherData(city: string): Observable<any> {
        return this.httpClient.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5`);
    }
}