import { Component, effect, inject, input, OnInit } from '@angular/core';
import { BandService } from '../band.service';
import { Band } from '../../band.model';
import { Router } from '@angular/router';

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
  private readonly router = inject(Router)
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

  goTo(link: string | undefined): void {
    if (!!link) {
      window.location.href = link
    }
  }
}
