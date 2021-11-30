export interface IRadioProps {
  modelValue: boolean
  disabled: boolean
  size: string
  activeColor: string
  option: IOptionProp
  border: boolean
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

export interface IOptionProp {
  label: String,
  value: any
}

export const AllType = [Number, String, Boolean, Symbol, null, undefined, Array, Object]