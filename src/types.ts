export type ID = number

export interface ITrack {
    url: string
    artist: string
    album: string
    cover: string
    duration: number
    title: string
    year: number
    id: ID
    skin_id?: number
} 

export interface ISkin {
    __id: ID
    image: string
    mainColor: string
    secondColor: string
    thirdColor: string
}