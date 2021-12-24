export interface ISelectProps {
  placeholder: string
  data: []
  clearable: boolean
  disabled: boolean
  searchSelect: boolean
  searchFilterDisabled: boolean
}

export interface ISelectInputProps {
  placeholder: string
  inputValue: string
  clearable: boolean
  disabled: boolean
  searchSelect: boolean
}

export interface ISelectMenuProps {
  data: []
  value: string
  searchKey: string
  searchFilterDisabled: boolean
}

export interface IData {
  value: string,
  text?: string
  disabled?: boolean
  [index: string]: any
}

export interface IOpenInfo {
  open: boolean,
  from?: string
}

export enum EIcon {
  delete = "ta-delete",
  arrowDown = "ta-xiajiantou"

}