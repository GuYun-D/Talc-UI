export interface IInputNumberProps {
  modelValue: number
  disabled: boolean
  step: number
  stepStrictly: boolean
  max: number
  min: number
}

export interface IInputButtonProps {
  disabled: boolean
  icon: ETag

}

export interface IMouseInfo {
  type: string
  tag: EMouseTag
}

export enum ETag {
  add = "add",
  decrease = "decrease"
}

export enum EMouseTag {
  enter = "enter",
  out = "out"
}

export enum EMaxMin {
  max = "max",
  min = "min"
}