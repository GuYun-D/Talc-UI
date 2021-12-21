type TCloseButton = {
  text?: string,
  callBack?: () => any
}


export interface IToastProps {
  autoClose?: boolean
  autoCloseDelay?: number
  closeButton?: TCloseButton,
  enableHtml?: boolean
  toastHTML?: string
  position?: string
}

export interface IOpenToastOptions {
  defaultText: string
  props: IToastProps
}

export enum EPosition {
  top = "top",
  middle = "middle",
  bottom = "bottom"
}