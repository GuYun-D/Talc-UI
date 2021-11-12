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

export enum carouselDirectionEnum {
  transverse = "transverse",
  vertical = "vertical"
}

export enum dotPositionEnum {
  botton = "bottom",
  right = "right"
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
  carouselDirection: string
}

export interface IDirectorProps {
  dir: director
}

export interface IDotProps {
  itemLength: number
  hasDot: boolean
  currentIndex: number
  dotBgColor: string
  dotType: string
  dotPosition: string
}