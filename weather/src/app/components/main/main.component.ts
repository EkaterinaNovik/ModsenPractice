import { Component, Input } from '@angular/core';
import { OnInit } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Forecast } from '../../models/forecast';
import { CurrentWeather } from '../../models/current-weather';
import { WeatherService } from '../../services/weather.service';
import { MessageService } from '../../services/message.service';
import * as WeatherStore from "../../store";
import { Store } from "@ngrx/store";
import { FormGroup, FormControl, Validators } from "@angular/forms";


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css', '../fonts.css', '../header.css']
})
export class MainComponent implements OnInit {
  constructor(private ws: WeatherService, public messageService: MessageService, private store: Store<WeatherStore.State>) {
  }

  public weatherForm = new FormGroup({
    city: new FormControl('', Validators.required),

  });


  fetchWeather() {
    const formData = new FormData();
    let city = formData.get("city");
    this.store.dispatch(new WeatherStore.FetchWeather(city));
  }
  @Input()
  weather!: CurrentWeather;
  cityForecast: Forecast[] = [];
  DaysWeather!: CurrentWeather;
  city = '';


  ngOnInit() {
    const city = this.cityDetect();
    if (city !== '') {
      this.city = city;
      this.getApiData(city);
    }
    if (typeof this.weather === 'undefined') {
      this.weather = new CurrentWeather('', '', '');
    }
  }

  cityDetect() {
    const loc = location.href.split('?');
    const getCity = {
      city: ''
    };
    if (loc.length > 1) {
      const getParams = loc[1].split('&');
      getParams.map((item) => {
        const [key, value] = item.split('=');
        getCity[key as keyof typeof getCity] = value;
      });
    }
    return getCity.city;
  }

  getApiData(city: string) {
    if (city.length < 1) {
      this.messageService.add('Please, input city name');
      history.pushState(null, "", '/');
      return false;
    }
    this.ws.getWeatherByCity(city)
      .pipe(
        catchError(err => {
          // console.log('Handling error getWeatherByCity locally and rethrowing it...', err);
          this.ws.log('Not found. Please, check the city exist');
          history.pushState(null, "", '/');
          return throwError(() => new Error(err));
        })
      )
      .subscribe(
        (data: any) => {
          this.DaysWeather = new CurrentWeather(
            data.name,
            data.main.temp,
            data.weather[0].icon);
          history.pushState(null, "", `?city=${data.name}`);
          const reformatCity = this.cityDetect();
          this.city = reformatCity;

        });
    this.ws.SevenDayForecast(city)
      .pipe(
        catchError(err => {
          // console.log('Handling error fiveDayForecast locally and rethrowing it...', err);
          return throwError(() => new Error(err));
        })
      )
      .subscribe(
        (data: any) => {
          data.list.filter((item: { dt_txt: string; weather: { icon: string; }[]; main: { temp: string; }; }, i: number) => {
            if (i % 8 === 0) {
              const temp = new Forecast(
                item.dt_txt,
                item.weather[0].icon,
                item.main.temp);
              this.cityForecast.push(temp);
            }
            return false;
          });
        });
    return true;
  }

  onSubmit() {
    this.cityForecast.splice(0, this.cityForecast.length);
    this.DaysWeather = new CurrentWeather('', '', '');
    this.messageService.clear();
    this.getApiData(this.city);
  }
}
