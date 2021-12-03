export interface IInputNumberProps {
  modelValue: number
  disabled: boolean
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