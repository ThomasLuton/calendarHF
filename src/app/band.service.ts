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
    },
    {
      id: 3,
      name: "Lucie Sue",
      picture: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/c0/96/5f/c0965fbe-87a0-c906-ad80-d674085bb56f/859769640466_cover.jpg/600x600bb.jpg",
      url: "https://www.youtube.com/watch?v=6KXPs68ArA0&ab_channel=LUCIESUE"
    },
    {
      id: 4,
      name: "Sandrider",
      picture: "https://is1-ssl.mzstatic.com/image/thumb/Music123/v4/93/70/0f/93700f8c-e746-b4cc-a858-03a747c32730/634457078574.png/600x600bb.jpg",
      url: "https://www.youtube.com/watch?v=--7zdo0P5dE&ab_channel=SatanikRoyaltyRecords"
    },
    {
      id: 5,
      name: "White ward",
      picture: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/f5/81/f4/f581f433-9e81-7522-a499-37af44a289cd/cover.jpg/600x600bb.jpg",
      url: "https://www.youtube.com/watch?v=lPWYcWK8o9g&ab_channel=DebemurMortiProductions"
    },
    {
      id: 6,
      name: "Dream theater",
      picture: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/62/02/e1/6202e1a9-e297-848e-c3c2-e4571fc8d2e0/mzi.opgeoigt.jpg/600x600bb.jpg",
      url: "https://www.youtube.com/watch?v=2IPT60hvGw4&ab_channel=DreamTheater"
    },
    {
      id: 7,
      name: "Spy",
      picture: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/af/28/d6/af28d690-d562-a18b-7e16-b74ab2b6e9a6/198846862132.jpg/600x600bb.jpg",
      url: "https://www.youtube.com/watch?v=dHpQgXOrfvc&ab_channel=Audiotree"
    }
  ]

  constructor() { }

  public getOneBand(id: number): Observable<Band> {
    return of(this.bands.filter((band) => band.id === id)[0]);
  }
}
