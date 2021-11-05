import type { IAttributeConfig } from "../../../base-ui/attribute/types/types";

export const attributeConfig: IAttributeConfig = {
  attributeTitle: "Cascader Attribute",
  attributeItems: [
    {
      name: "data-source",
      desc: "选择器元数据",
      type: "Array",
      value: "_",
      defaultValue: "required",
    },
    {
      name: "popoverHeight",
      desc: "选择器高度",
      type: "String",
      value: "_",
      defaultValue: "_",
    },
    {
      name: "selected",
      desc: "数据绑定",
      type: "Array",
      value: "_",
      defaultValue: "required",
    },
    {
      name: "cascaderPlaceholder",
      desc: "提示文字",
      type: "String",
      value: "_",
      defaultValue: "请选择",
    }
  ],
};
