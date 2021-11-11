export enum director {
  next = 'next',
  prev = 'prev'
}

export interface ICarouselProps {
  autoplay: boolean
  duration: number
  initial: number
  dot: boolean
  director: boolean
  dotBgColor: string
  direction: string
}

export interface IDirectorProps  {
  dir: string
}

export interface IDotProps {
  itemLength: number
  hasDot: boolean
  currentIndex: Number
  dotBgColor: string
}