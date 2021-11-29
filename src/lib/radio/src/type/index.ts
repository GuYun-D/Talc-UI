export interface IRadioProps {
  modelValue: boolean
  disabled: boolean
  size: string
  activeColor: string
}

export interface IElementCollectionObj {
  oLabel?: HTMLLabelElement
  oSpans?: HTMLCollectionOf<HTMLSpanElement>
}

export enum ERadioSizeType {
  normal = "normal",
  big = "big",
  small = "samll"
}