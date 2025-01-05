import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css'
})
export class PaginationComponent {

  currentDay = input(1);
  bandId = input(1);
  previous = output<void>();
  next = output<void>();

  isFirst(): boolean {
    if (this.bandId() <= 1) {
      return true;
    }
    return false;
  }

  isLast(): boolean {
    if (this.bandId() === this.currentDay()) {
      return true;
    }
    return false;
  }

  onPrevious(): void {
    if (!this.isFirst()) {
      this.previous.emit();
    }
  }

  onNext(): void {
    if (!this.isLast()) {
      this.next.emit();
    }
  }
}
