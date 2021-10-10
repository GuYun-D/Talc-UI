export interface IAttributeConfig {
  attributeTitle: string;
  attributeItems: IAttributeItems[];
}

export interface IAttributeItems {
  name: string,
  desc: string,
  type: string,
  value: string,
  defaultValue: string
}