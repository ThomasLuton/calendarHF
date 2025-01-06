import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css'
})
export class CalendarComponent {

  date = new Date(Date.now())
  selectMonthId = signal(this.date.getUTCMonth());
  selectedMonth = computed(() => this.convertMonth(this.selectMonthId()));

  convertMonth(monthId: number): string {
    switch (monthId) {
      case 0:
        return "Janvier";
      case 1:
        return "Février";
      case 2:
        return "Mars";
      case 3:
        return "Avril";
      case 4:
        return "Mai";
      case 5:
        return "Juin";
      default:
        return "";
    }
  }

  isFirst(): boolean {
    if (this.selectMonthId() <= 0) {
      return true;
    }
    return false;
  }

  isLast(): boolean {
    if (this.selectMonthId() >= 5) {
      return true;
    }
    return false;
  }

  onPrevious(): void {
    if (!this.isFirst()) {
      this.selectMonthId.update(() => this.selectMonthId() - 1)
    }
  }

  onNext(): void {
    if (!this.isLast()) {
      this.selectMonthId.update(() => this.selectMonthId() + 1)
    }
  }
}
