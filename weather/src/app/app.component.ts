import { Component } from '@angular/core';
import { selectWeatherState } from './store/reducers';
import { select, Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weather';
  constructor(private store: Store) {
    this.store
      .pipe(select(selectWeatherState));
  }
}
