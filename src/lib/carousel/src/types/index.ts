export enum director {
  next = 'next',
  prev = 'prev'
}

export enum dotType {
  circle = "circle",
  rectangle = "rectangle"
}

export enum trigger {
  click = "click",
  hover = "hover"
}

export interface ICarouselProps {
  autoplay: boolean
  duration: number
  initial: number
  dot: boolean
  director: boolean
  dotBgColor: string
  direction: string
  dotType: string
  trigger: string
}

export interface IDirectorProps {
  dir: director
}

export interface IDotProps {
  itemLength: number
  hasDot: boolean
  currentIndex: Number
  dotBgColor: string
  dotType: string
}