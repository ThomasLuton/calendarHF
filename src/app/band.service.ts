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
      hellfestLink: 'https://hellfest.fr/artiste/apocalyptica'
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
      picture: 'https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/39/b3/ff/39b3ff43-df24-345e-a444-71414fb63b23/198704125270_Cover.jpg/600x600bb.jpg',
      url: 'https://www.youtube.com/watch?v=ev_vPbqUlZs&ab_channel=SUMERIAN',
      hellfestLink: 'https://hellfest.fr/artiste/poppy'
    },
    {
      id: 19,
      name: 'Defeater',
      picture: 'https://is1-ssl.mzstatic.com/image/thumb/Music123/v4/f5/63/af/f563af99-3931-d207-f8ba-dfd3c952a805/0045778762309.png/600x600bb.jpg',
      url: 'https://www.youtube.com/watch?v=gD-rffbriWI&ab_channel=DefeaterVEVO',
      hellfestLink: 'https://hellfest.fr/artiste/defeater'
    },
    {
      id: 20,
      name: 'Mental Cruelty',
      picture: 'https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/f6/96/57/f696577a-2b4d-3ef0-4c32-621105161298/196589783226.jpg/600x600bb.jpg',
      url: 'https://www.youtube.com/watch?v=WXJwYl6L73w&ab_channel=CenturyMediaRecords',
      hellfestLink: 'https://hellfest.fr/artiste/mental-cruelty'
    },
    {
      id: 21,
      name: 'Cachemire',
      picture: 'https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/04/1a/e2/041ae286-7f99-2976-10dd-aeaf19901085/cover.jpg/600x600bb.jpg',
      url: 'https://www.youtube.com/watch?v=bLSla3zvv1A&ab_channel=Cachemire-Topic',
      hellfestLink: 'https://hellfest.fr/artiste/cachemire'
    },
    {
      id: 22,
      name: 'Windhand',
      picture: 'https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/b3/80/39/b380396f-b004-bfd7-30f0-427b64e34474/781676399628.jpg/600x600bb.jpg',
      url: 'https://www.youtube.com/watch?v=2JhVTnU8MnI&ab_channel=RelapseRecords',
      hellfestLink: 'https://hellfest.fr/artiste/windhand'
    },
    {
      id: 23,
      name: 'Eisbrecher',
      picture: 'https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/09/9b/d7/099bd7db-e698-3538-ff2c-5f83a42947a7/782388139267_Cover.jpg/600x600bb.jpg',
      url: 'https://www.youtube.com/watch?v=yjO1bMHbDpY&ab_channel=EISBRECHERofficial',
      hellfestLink: 'https://hellfest.fr/artiste/eisbrecher'
    },
    {
      id: 24,
      name: 'Majestica',
      picture: 'https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/b2/f1/b4/b2f1b42c-1583-031b-175e-55dbaebc37a9/cover.jpg/600x600bb.jpg',
      url: 'https://www.youtube.com/watch?v=dP08ex8nbKE&ab_channel=NuclearBlastRecords',
      hellfestLink: 'https://hellfest.fr/artiste/majestica'
    },
    {
      id: 25,
      name: 'Soft Play',
      picture: 'https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/a5/14/e1/a514e162-6925-ce5d-5263-6901c3cd21b0/4099964044423.jpg/600x600bb.jpg',
      url: 'https://www.youtube.com/watch?v=nMOgilf4WX4&ab_channel=SOFTPLAY',
      hellfestLink: 'https://hellfest.fr/artiste/soft-play'
    },
    {
      id: 26,
      name: 'Gutalax',
      picture: 'https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/6a/e5/50/6ae550e5-2f3a-d06d-598a-cc7b3a72cf75/artwork.jpg/600x600bb.jpg',
      url: 'https://www.youtube.com/watch?v=O8kGgtF-C4w&ab_channel=GUTALAXgoregrind',
      hellfestLink: 'https://hellfest.fr/artiste/gutalax'
    },
    {
      id: 27,
      name: 'Refused',
      picture: 'https://is1-ssl.mzstatic.com/image/thumb/Music113/v4/df/59/05/df5905f4-56e6-63a6-d914-ae226ae9e733/0045778007165.png/600x600bb.jpg',
      url: 'https://www.youtube.com/watch?v=NkAe30aEG5c&ab_channel=EpitaphRecords',
      hellfestLink: 'https://hellfest.fr/artiste/refused'
    },
    {
      id: 28,
      name: 'Kylesa',
      picture: 'https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/e3/f8/d9/e3f8d95d-396a-45ee-68e0-4cd3123c3c6c/886443803091.jpg/600x600bb.jpg',
      url: 'https://www.youtube.com/watch?v=VlbC-hk25Aw&ab_channel=SeasonofMist',
      hellfestLink: 'https://hellfest.fr/artiste/kylesa'
    },
    {
      id: 29,
      name: 'Trollfest',
      picture: 'https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/4d/6f/ea/4d6feac9-0cf4-c3e4-ecb3-2b03b80af8be/859796973155_cover.jpg/600x600bb.jpg',
      url: 'https://www.youtube.com/watch?v=BmCc-0b6urc&ab_channel=TrollfesTOfficial',
      hellfestLink: 'https://hellfest.fr/artiste/trollfest'
    },
    {
      id: 30,
      name: 'Epica',
      picture: 'https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/fe/4f/4e/fe4f4e6d-8437-877b-0682-17e433abbf2f/cover.jpg/600x600bb.jpg',
      url: 'https://www.youtube.com/watch?v=MOD50EoFqdg&ab_channel=EPICA',
      hellfestLink: 'https://hellfest.fr/artiste/epica'
    },
    {
      id: 31,
      name: "Lion's Law",
      picture: 'https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/da/46/1a/da461ace-d819-72d2-97d9-725ae0342cea/15669.jpg/600x600bb.jpg',
      url: 'https://www.youtube.com/watch?v=5F2ypnLQUrU&ab_channel=Lion%27sLaw',
      hellfestLink: 'https://hellfest.fr/artiste/lion-s-law'
    },
    {
      id: 32,
      name: "Furies",
      picture: 'https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/2d/e6/37/2de6379c-b6b2-733d-0d54-a1bb165896c5/134341.jpg/600x600bb.jpg',
      url: 'https://www.youtube.com/watch?v=UmHDuLaY4zs&ab_channel=Furies',
      hellfestLink: 'https://hellfest.fr/artiste/furies'
    },
    {
      id: 33,
      name: "Myles Kennedy",
      picture: 'https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/af/11/8f/af118fe2-b753-daf1-9ad4-f818106475f9/810157920119.jpg/600x600bb.jpg',
      url: 'https://www.youtube.com/watch?v=7_LXR96kh9s&ab_channel=MylesKennedy',
      hellfestLink: 'https://hellfest.fr/artiste/myles-kennedy'
    },
    {
      id: 34,
      name: "Stoned Jesus",
      picture: '',
      url: '',
      hellfestLink: 'https://hellfest.fr/artiste/stoned-jesus'
    },
    {
      id: 35,
      name: "Luc Arbogast",
      picture: '',
      url: '',
      hellfestLink: 'https://hellfest.fr/artiste/luc-arbogast'
    },
    {
      id: 36,
      name: "Kittie",
      picture: '',
      url: '',
      hellfestLink: 'https://hellfest.fr/artiste/kittie'
    },
    {
      id: 37,
      name: "Teen Mortgage",
      picture: '',
      url: '',
      hellfestLink: 'https://hellfest.fr/artiste/teen-mortgage'
    },
    {
      id: 38,
      name: "Jinjer",
      picture: '',
      url: '',
      hellfestLink: 'https://hellfest.fr/artiste/jinjer'
    },
    {
      id: 39,
      name: "Blackgold",
      picture: '',
      url: '',
      hellfestLink: 'https://hellfest.fr/artiste/blackgold'
    },
    {
      id: 40,
      name: "Crows",
      picture: '',
      url: '',
      hellfestLink: 'https://hellfest.fr/artiste/crows'
    },
    {
      id: 41,
      name: "Gravekvlt",
      picture: '',
      url: '',
      hellfestLink: 'https://hellfest.fr/artiste/gravekvlt'
    },
    {
      id: 42,
      name: "Kim Dracula",
      picture: '',
      url: '',
      hellfestLink: 'https://hellfest.fr/artiste/kim-dracula'
    },
    {
      id: 43,
      name: "Beton armé",
      picture: '',
      url: '',
      hellfestLink: 'https://hellfest.fr/artiste/beton-arme'
    },
    {
      id: 44,
      name: "Persefone",
      picture: '',
      url: '',
      hellfestLink: 'https://hellfest.fr/artiste/persefone'
    }
  ]

  constructor() { }

  public getOneBand(id: number): Observable<Band> {
    return of(this.bands.filter((band) => band.id === id)[0]);
  }
}
