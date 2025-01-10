import { Component, effect, inject, input, OnInit, signal } from '@angular/core';
import { BandService } from '../band.service';
import { Band } from '../../band.model';
import { trigger, transition, state, animate, style, AnimationEvent } from '@angular/animations';


@Component({
  selector: 'app-band-of-the-day',
  standalone: true,
  imports: [],
  animations: [
    trigger('openClose', [
      state(
        'open',
        style({
          opacity: 0
        }),
      ),
      state(
        'closed',
        style({
          opacity: 1,
        })),
      transition('closed => open', [animate('2s')]),
    ])
  ],
  templateUrl: './band-of-the-day.component.html',
  styleUrl: './band-of-the-day.component.css'
})
export class BandOfTheDayComponent implements OnInit {

  isOpen = signal(false)
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

  toggle(): void {
    if (!this.isOpen())
      this.isOpen.update(() => true)
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
