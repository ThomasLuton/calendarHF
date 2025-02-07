import { Component, computed, signal } from '@angular/core';
import { SleepCounterComponent } from './sleep-counter/sleep-counter.component';
import { BandOfTheDayComponent } from './band-of-the-day/band-of-the-day.component';
import { PaginationComponent } from './pagination/pagination.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SleepCounterComponent, BandOfTheDayComponent, PaginationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  readonly startDate = new Date('June 19, 2025 00:00:00');
  now = signal(Date.now());
  remainingTime = computed(() => (this.startDate.getTime() - this.now()))
  remainingDays = computed(() => Math.floor(this.remainingTime() / 86400000))
  day = computed(() => 170 - this.remainingDays() - 1);
  bandId = signal(this.day());

  onPrevious(): void {
    this.bandId.update(() => this.bandId() - 1)
  }

  onNext(): void {
    this.bandId.update(() => this.bandId() + 1)
  }

  onSelect(newBandId: number): void {
    this.bandId.update(() => newBandId)
  }
}
