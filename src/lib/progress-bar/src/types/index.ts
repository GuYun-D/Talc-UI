export interface IProgressProps {
  type: string
  percentage: number
  status: string
  height: number
}

export interface ILineBarProps {
  percentage: number
  statusColor: string
  height: number
  statusTipType: string
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