export interface IProgressProps {
  type: string
  percentage: number
  status: string
  height: number
  textInside: boolean
  loading: boolean
}

export interface ILineBarProps {
  percentage: number
  statusColor: string
  height: number
  statusTipType: string
  textInside: boolean
  loading: boolean
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