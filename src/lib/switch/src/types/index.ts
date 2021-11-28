export interface ISwitchProps {
  activeColor: string
  activeText: string
  inactiveColor: string
  inactiveText: string
  disabled: boolean
  modelValue: boolean
  activeTextColor: string
  textVisible: boolean
  size: string
  height: number
}

export enum ESwitchSize {
  big = 'big',
  normal = "normal",
  small = "small"
}