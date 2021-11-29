export interface IRadioProps {
  modelValue: boolean
  disabled: boolean
  size: string
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