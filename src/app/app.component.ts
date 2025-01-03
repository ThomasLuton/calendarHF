import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SleepCounterComponent } from './sleep-counter/sleep-counter.component';
import { BandOfTheDayComponent } from './band-of-the-day/band-of-the-day.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SleepCounterComponent, BandOfTheDayComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CalendarHF';
}
