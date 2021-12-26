export interface ITransferProps {
  modelValue: []
  titles: []
  selectArr: []
}

export interface IModelValue {
  key?: string
  label: string
  disabled?: boolean
  [index: string]: any
}

export interface ITransferInputProps {
  title: string
  selectedArr: []
  type: string
}

export enum EType {
  target = "target",
  selected = "selected"
}