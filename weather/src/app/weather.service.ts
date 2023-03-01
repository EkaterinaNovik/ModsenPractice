import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class WeatherService {

    constructor(private httpClient: HttpClient) { }

    getWeatherData(city: string): Observable<any> {
        return this.httpClient.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=8caa48af0c2aabbb0405b8a3edc3b688`);
    }
}