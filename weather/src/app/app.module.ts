import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CloudyComponent } from './components/cloudy/cloudy.component';
import { MainlyCloudyComponent } from './components/mainly-cloudy/mainly-cloudy.component';
import { RainComponent } from './components/rain/rain.component';
import { SnowComponent } from './components/snow/snow.component';
import { SunnyComponent } from './components/sunny/sunny.component';
import { WindyComponent } from './components/windy/windy.component';
import { StoreModule } from '@ngrx/store';
import { effects } from './store';
import { reducer } from "./store/reducers/weather.reducer"
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { WeatherService } from "./services/weather.service";
import { MessagesComponent } from './messages/messages.component';
import { MainComponent } from './components/main/main.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthenticationInterceptor } from './auth';


@NgModule({
  declarations: [
    AppComponent,
    CloudyComponent,
    MainlyCloudyComponent,
    RainComponent,
    SnowComponent,
    SunnyComponent,
    WindyComponent,
    MessagesComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ weather: reducer }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot(effects)
  ],
  providers: [WeatherService, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthenticationInterceptor,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
