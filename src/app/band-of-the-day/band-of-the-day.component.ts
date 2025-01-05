import { Component, computed, effect, inject, Input, input, OnInit, Signal, signal } from '@angular/core';
import { BandService } from '../band.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { Band } from '../../band.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-band-of-the-day',
  standalone: true,
  imports: [],
  templateUrl: './band-of-the-day.component.html',
  styleUrl: './band-of-the-day.component.css'
})
export class BandOfTheDayComponent implements OnInit {

  readonly bandId = input(0)
  private readonly bandService = inject(BandService);
  band: Band | undefined = undefined;

  constructor() {
    effect(() => {
      this.changeBand();
    })
  }

  ngOnInit(): void {
    this.changeBand();
  }

  changeBand(): void {
    this.bandService.getOneBand(this.bandId()).subscribe((res) => this.band = res);
  }
}
