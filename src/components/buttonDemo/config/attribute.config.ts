import type { IAttributeConfig } from "../../../base-ui/attribute/types/types";

export const attributeConfig: IAttributeConfig = {
  attributeTitle: "Button Attribute",
  attributeItems: [
    {
      name: "size",
      desc: "尺寸大小",
      type: "String",
      value: "small / big",
      defaultValue: "normal",
    },
    {
      name: "theme",
      desc: "类型",
      type: "String",
      value: "button / link / text",
      defaultValue: "button",
    },
    {
      name: "level",
      desc: "按钮颜色",
      type: "String",
      value: "main / dnager",
      defaultValue: "normal",
    },
    {
      name: "disabled",
      desc: "是否禁用",
      type: "Boolean",
      value: "_",
      defaultValue: "false",
    },
    {
      name: "loading",
      desc: "是否加载中",
      type: "Boolean",
      value: "_",
      defaultValue: "false",
    },
    {
      name: "ripple",
      desc: "波纹效果",
      type: "Boolean",
      value: "_",
      defaultValue: "false",
    },
    {
      name: "icon",
      desc: "为按钮添加图标",
      type: "String",
      value: "见icon组件",
      defaultValue: "_",
    },
    {
      name: "iconPosition",
      desc: "图标的位置",
      type: "String",
      value: "left / right",
      defaultValue: "left",
    },
  ],
};
