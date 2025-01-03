import { Component, inject, OnInit, Signal, signal } from '@angular/core';
import { BandService } from '../band.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { Band } from '../../band.model';

@Component({
  selector: 'app-band-of-the-day',
  standalone: true,
  imports: [],
  templateUrl: './band-of-the-day.component.html',
  styleUrl: './band-of-the-day.component.css'
})
export class BandOfTheDayComponent implements OnInit {

  readonly id = signal(2);
  private readonly bandService = inject(BandService);
  band = toSignal<Band>(this.bandService.getOneBand(this.id()), {
    initialValue: undefined
  })

  ngOnInit(): void {
    console.log(this.band())
  }

}
