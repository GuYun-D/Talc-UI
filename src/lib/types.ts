export interface ICollapseUpdateIsopen {
  name: string,
  isSelected: boolean
}

export interface ISelectedItem {
  name?: string,
  children?: ISelectedItem[]
}