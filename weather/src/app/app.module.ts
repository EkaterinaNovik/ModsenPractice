import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CloudyComponent } from './components/cloudy/cloudy.component';
import { MainlyCloudyComponent } from './components/mainly-cloudy/mainly-cloudy.component';
import { RainComponent } from './components/rain/rain.component';
import { SnowComponent } from './components/snow/snow.component';
import { SunnyComponent } from './components/sunny/sunny.component';
import { WindyComponent } from './components/windy/windy.component';

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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
