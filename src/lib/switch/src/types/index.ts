export interface ISwitchProps {
  size: string
  activeColor: string
  activeText: string
  inactiveColor: string
  inactiveText: string
  disabled: boolean
  modelValue: boolean
}

export enum ESwitchSize {
  big = 'big',
  normal = "normal",
  small = "small",
  mini = "mini"
}