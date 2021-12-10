export interface ITagProps {
  type: string
  tagColor: string
  tagBgcolor: string
  closeable: boolean
  disabled: boolean
  icon: string
}

export enum ETagType {
  normal = "normal",
  success = "success",
  info = "info",
  warning = "warning",
  danger = "danger"
}