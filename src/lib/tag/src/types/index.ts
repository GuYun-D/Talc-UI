export interface ITagProps {
  type: string
  tagColor: string
  tagBgcolor: string
}

export enum ETagType {
  normal = "normal",
  success = "success",
  info = "info",
  warning = "warning",
  danger = "danger"
}