export interface Band {
    id: number,
    name: string,
    picture: string,
    url: string,
    bonus?: Band[]
}