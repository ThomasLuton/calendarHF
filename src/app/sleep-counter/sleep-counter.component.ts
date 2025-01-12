import { Component, computed, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-sleep-counter',
  standalone: true,
  imports: [],
  templateUrl: './sleep-counter.component.html',
  styleUrl: './sleep-counter.component.css'
})
export class SleepCounterComponent implements OnInit {

  isCountDown = signal(false);
  readonly startDate = new Date('June 19, 2025 00:00:00');
  utcNow = signal(Date.now())
  now = computed(() => {
    const date = new Date(this.utcNow())
    return this.utcNow() + date.getTimezoneOffset() * 60000
  })
  remainingTime = computed(() => (this.startDate.getTime() - this.now()))
  remainingDays = computed(() => Math.floor(this.remainingTime() / 86400000))
  remainingHoures = computed(() => Math.floor(this.remainingTime() / 3600000))
  remainingMinutes = computed(() => Math.floor((this.remainingTime() - this.remainingHoures() * 3600000) / 60000))
  remainingSeconds = computed(() => Math.floor((this.remainingTime() - (this.remainingHoures() * 3600000 + this.remainingMinutes() * 60000)) / 1000))

  ngOnInit() {
    setInterval(() => {
      this.utcNow.update(() => Date.now())
    }, 1000)
  }

  switchButton() {
    if (this.isCountDown()) {
      this.isCountDown.set(false);
    } else {
      this.isCountDown.set(true);
    }
  }
}
