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
      url: 'https://www.youtube.com/watch?v=O0dlwcJL-aE&ab_channel=MLVLTDTV',
      hellfestLink: 'https://hellfest.fr/artiste/guilt-trip'
    },
    {
      id: 2,
      name: 'Tsar',
      picture: 'https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/62/45/20/624520ba-dfe2-c94a-35bb-77fc234ceb50/198588657379.jpg/600x600bb.jpg',
      url: 'https://www.youtube.com/watch?v=rsWQcVLZBm0&ab_channel=TSAR',
      hellfestLink: 'https://hellfest.fr/artiste/tsar'
    },
    {
      id: 3,
      name: "Lucie Sue",
      picture: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/c0/96/5f/c0965fbe-87a0-c906-ad80-d674085bb56f/859769640466_cover.jpg/600x600bb.jpg",
      url: "https://www.youtube.com/watch?v=6KXPs68ArA0&ab_channel=LUCIESUE",
      hellfestLink: 'https://hellfest.fr/artiste/lucie-sue'
    },
    {
      id: 4,
      name: "Sandrider",
      picture: "https://is1-ssl.mzstatic.com/image/thumb/Music123/v4/93/70/0f/93700f8c-e746-b4cc-a858-03a747c32730/634457078574.png/600x600bb.jpg",
      url: "https://www.youtube.com/watch?v=--7zdo0P5dE&ab_channel=SatanikRoyaltyRecords",
      hellfestLink: 'https://hellfest.fr/artiste/sandrider'
    },
    {
      id: 5,
      name: "White ward",
      picture: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/f5/81/f4/f581f433-9e81-7522-a499-37af44a289cd/cover.jpg/600x600bb.jpg",
      url: "https://www.youtube.com/watch?v=lPWYcWK8o9g&ab_channel=DebemurMortiProductions",
      hellfestLink: 'https://hellfest.fr/artiste/white-ward'
    },
    {
      id: 6,
      name: "Dream theater",
      picture: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/62/02/e1/6202e1a9-e297-848e-c3c2-e4571fc8d2e0/mzi.opgeoigt.jpg/600x600bb.jpg",
      url: "https://www.youtube.com/watch?v=2IPT60hvGw4&ab_channel=DreamTheater",
      hellfestLink: 'https://hellfest.fr/artiste/dream-theater'
    },
    {
      id: 7,
      name: "Spy",
      picture: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/af/28/d6/af28d690-d562-a18b-7e16-b74ab2b6e9a6/198846862132.jpg/600x600bb.jpg",
      url: "https://www.youtube.com/watch?v=dHpQgXOrfvc&ab_channel=Audiotree",
      hellfestLink: 'https://hellfest.fr/artiste/spy'
    },
    {
      id: 8,
      name: 'Nervosa',
      picture: 'https://is1-ssl.mzstatic.com/image/thumb/Music111/v4/23/8b/22/238b224b-54d7-9efc-d545-df0bb7b2e836/191018548650.jpg/600x600bb.jpg',
      url: 'https://www.youtube.com/watch?v=BH7oNQ2SYs8&ab_channel=NapalmRecords',
      hellfestLink: 'https://hellfest.fr/artiste/nervosa'
    },
    {
      id: 9,
      name: 'Apocalyptica',
      picture: 'https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/2d/6b/e0/2d6be04c-a1c7-5669-6e63-a0779bedb540/4260341644912.png/600x600bb.jpg',
      url: 'https://www.youtube.com/watch?v=yN3lUM-r6bk&ab_channel=Apocalyptica',
      hellfestLink: 'https://hellfest.fr/artiste/apocalyptica',
      bonus: [
        {
          id: 9,
          name: 'Apocalyptica',
          picture: 'https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/2d/6b/e0/2d6be04c-a1c7-5669-6e63-a0779bedb540/4260341644912.png/600x600bb.jpg',
          url: 'https://www.youtube.com/watch?v=yN3lUM-r6bk&ab_channel=Apocalyptica',
          hellfestLink: 'https://hellfest.fr/artiste/apocalyptica'
        }
      ]
    },
    {
      id: 10,
      name: 'Wormsand',
      picture: 'https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/99/02/06/990206f4-cb3c-c345-a5f1-8f1c12bc6036/3663729328441_cover.jpg/600x600bb.jpg',
      url: 'https://www.youtube.com/watch?v=_WS8dFIG-i8&ab_channel=Wormsand',
      hellfestLink: 'https://hellfest.fr/artiste/wormsand'
    },
    {
      id: 11,
      name: 'Agriculture',
      picture: 'https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/fc/b5/5a/fcb55a63-c350-e724-52b6-a05041202222/795154139934.jpg/600x600bb.jpg',
      url: 'https://www.youtube.com/watch?v=8M6dA3Z7ogM&ab_channel=TheFlenser',
      hellfestLink: 'https://hellfest.fr/artiste/agriculture'
    },
    {
      id: 12,
      name: 'A day to remember',
      picture: 'https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/de/ff/da/deffda50-12f1-01e3-c928-bd02eb91d1f5/19CRGIM19275.rgb.jpg/600x600bb.jpg',
      url: 'https://www.youtube.com/watch?v=CN4IIgFz93k&ab_channel=ADayToRememberVEVO',
      hellfestLink: 'https://hellfest.fr/artiste/a-day-to-remember'
    },
    {
      id: 13,
      name: 'The Real McKenzies',
      picture: 'https://is1-ssl.mzstatic.com/image/thumb/Music/8c/bd/a6/mzi.rdvbeomd.jpg/600x600bb.jpg',
      url: 'https://www.youtube.com/watch?v=1eu0PtSdSNo&ab_channel=Hammer_charge',
      hellfestLink: 'https://hellfest.fr/artiste/the-real-mckenzies'
    },
    {
      id: 14,
      name: 'Vola',
      picture: 'https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/6c/8d/e9/6c8de94c-bc7f-ee1e-9a47-d9dcc76eb5d5/8712725748854.png/600x600bb.jpg',
      url: 'https://www.youtube.com/watch?v=n-5xyCwH0mk&ab_channel=VOLA',
      hellfestLink: 'https://hellfest.fr/artiste/vola'
    },
    {
      id: 15,
      name: 'Last Train',
      picture: 'https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/35/8b/a0/358ba0f3-8729-2343-6849-66134d82d210/5400863176013_cover.jpg/600x600bb.jpg',
      url: 'https://www.youtube.com/watch?v=CltmaxjO4E4&ab_channel=LASTTRAIN',
      hellfestLink: 'https://hellfest.fr/artiste/last-train'
    },
    {
      id: 16,
      name: 'Chat Pile',
      picture: 'https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/81/e7/12/81e7125f-f6f1-7a11-5548-fd16ef4258d1/657628445906.jpg/600x600bb.jpg',
      url: 'https://www.youtube.com/watch?v=xvvBnmR_ClQ&ab_channel=TheFlenser',
      hellfestLink: 'https://hellfest.fr/artiste/chat-pile'
    },
    {
      id: 17,
      name: 'Tryglav',
      picture: 'https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/db/05/51/db055178-3e53-cd25-fb93-a3ebaafb65ac/artwork.jpg/600x600bb.jpg',
      url: 'https://www.youtube.com/watch?v=kUooFpcwcmY&ab_channel=BorisT.',
      hellfestLink: 'https://hellfest.fr/artiste/tryglave'
    },
    {
      id: 18,
      name: 'Poppy',
      picture: '',
      url: '',
      hellfestLink: 'https://hellfest.fr/artiste/poppy'
    },
    {
      id: 19,
      name: 'Defeater',
      picture: '',
      url: '',
      hellfestLink: 'https://hellfest.fr/artiste/defeater'
    },
    {
      id: 20,
      name: 'Mental Cruelty',
      picture: '',
      url: '',
      hellfestLink: 'https://hellfest.fr/artiste/mental-cruelty'
    },
    {
      id: 21,
      name: 'Cachemire',
      picture: '',
      url: '',
      hellfestLink: 'https://hellfest.fr/artiste/cachemire'
    },
    {
      id: 22,
      name: 'Windhand',
      picture: '',
      url: '',
      hellfestLink: 'https://hellfest.fr/artiste/windhand'
    },
    {
      id: 23,
      name: 'Eisbrecher',
      picture: '',
      url: '',
      hellfestLink: 'https://hellfest.fr/artiste/eisbrecher'
    },
    {
      id: 24,
      name: 'Majestica',
      picture: '',
      url: '',
      hellfestLink: 'https://hellfest.fr/artiste/majestica'
    },
    {
      id: 25,
      name: 'Soft Play',
      picture: '',
      url: '',
      hellfestLink: 'https://hellfest.fr/artiste/soft-play'
    },
    {
      id: 26,
      name: 'Gutalax',
      picture: '',
      url: '',
      hellfestLink: 'https://hellfest.fr/artiste/gutalax'
    },
    {
      id: 27,
      name: 'Refused',
      picture: '',
      url: '',
      hellfestLink: 'https://hellfest.fr/artiste/refused'
    },
    {
      id: 28,
      name: 'Kylesa',
      picture: '',
      url: '',
      hellfestLink: 'https://hellfest.fr/artiste/kylesa'
    },
    {
      id: 29,
      name: 'Trollfest',
      picture: '',
      url: '',
      hellfestLink: 'https://hellfest.fr/artiste/trollfest'
    },
    {
      id: 30,
      name: 'Epica',
      picture: '',
      url: '',
      hellfestLink: 'https://hellfest.fr/artiste/epica'
    },
    {
      id: 31,
      name: "Lion's Law",
      picture: '',
      url: '',
      hellfestLink: 'https://hellfest.fr/artiste/lion-s-law'
    }
  ]

  constructor() { }

  public getOneBand(id: number): Observable<Band> {
    return of(this.bands.filter((band) => band.id === id)[0]);
  }
}
