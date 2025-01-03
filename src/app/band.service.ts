import { Injectable } from '@angular/core';
import { Band } from '../band.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BandService {

  readonly bands: Band[] = [
    {
      id: 1,
      name: 'Guilt trip',
      picture: 'https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/c2/85/01/c285011e-8110-1d75-076f-a2ebce9ca4f6/cover.jpg/600x600bb.jpg',
      url: 'https://www.youtube.com/watch?v=O0dlwcJL-aE&ab_channel=MLVLTDTV'
    },
    {
      id: 2,
      name: 'Tsar',
      picture: 'https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/62/45/20/624520ba-dfe2-c94a-35bb-77fc234ceb50/198588657379.jpg/600x600bb.jpg',
      url: 'https://www.youtube.com/watch?v=rsWQcVLZBm0&ab_channel=TSAR'
    }
  ]

  constructor() { }

  public getOneBand(id: number): Observable<Band> {
    return of(this.bands.filter((band) => band.id === id)[0]);
  }
}
