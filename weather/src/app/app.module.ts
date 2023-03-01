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
import { HttpClientModule } from "@angular/common/http";
import { WeatherService } from "./weather.service";


@NgModule({
  declarations: [
    AppComponent,
    CloudyComponent,
    MainlyCloudyComponent,
    RainComponent,
    SnowComponent,
    SunnyComponent,
    WindyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ weather: reducer }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot(effects)
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
