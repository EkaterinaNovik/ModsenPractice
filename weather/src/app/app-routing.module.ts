import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CloudyComponent } from './components/cloudy/cloudy.component';
import { MainlyCloudyComponent } from './components/mainly-cloudy/mainly-cloudy.component';
import { RainComponent } from './components/rain/rain.component';
import { SnowComponent } from './components/snow/snow.component';
import { SunnyComponent } from './components/sunny/sunny.component';
import { WindyComponent } from './components/windy/windy.component';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  { path: 'cloudy', component: CloudyComponent },
  { path: 'mainlyCloudy', component: MainlyCloudyComponent },
  { path: 'rain', component: RainComponent },
  { path: 'snow', component: SnowComponent },
  { path: 'sunny', component: SunnyComponent },
  { path: 'windy', component: WindyComponent },
  { path: "", component: MainComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
