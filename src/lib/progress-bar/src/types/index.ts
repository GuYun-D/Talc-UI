export interface IProgressProps {
  type: string
  modelValue: number
  status: string
  height: number
  textInside: boolean
}

export interface ILineBarProps {
  percentage: number
  statusColor: string
  height: number
  statusTipType: string
  textInside: boolean
}

export enum EProgressType {
  line = "line",
  circle = "circle"
}

export enum EStatus {
  normal = "normal",
  success = "success",
  warn = "warning",
  exception = "exception"
}