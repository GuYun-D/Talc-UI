import type { IAttributeConfig } from "../../../base-ui/attribute/types/types";

export const attributeConfig: IAttributeConfig = {
  attributeTitle: "Input Attribute",
  attributeItems: [
    {
      name: "type",
      desc: "输入框类型",
      type: "String",
      value: "_",
      defaultValue: "text",
    },
    {
      name: "placeHolder",
      desc: "输入框提示",
      type: "String",
      value: "_",
      defaultValue: "_",
    },
    {
      name: "disable",
      desc: "是否禁用",
      type: "Boolean",
      value: "_",
      defaultValue: "false",
    },
    {
      name: "readonly",
      desc: "是否只读",
      type: "Boolean",
      value: "_",
      defaultValue: "false",
    },
    {
      name: "error",
      desc: "错误信息",
      type: "String",
      value: "_",
      defaultValue: "_",
    },
    {
      name: "size",
      desc: "输入框大小",
      type: "String",
      value: "normal / big / mini",
      defaultValue: "normal",
    },
    {
      name: "prefixIcon",
      desc: "前置图标",
      type: "String",
      value: "见icon组件",
      defaultValue: "_",
    },
    {
      name: "suffixIcon",
      desc: "后置图标",
      type: "String",
      value: "见icon组件",
      defaultValue: "_",
    },
    {
      name: "clearable",
      desc: "可清空",
      type: "Boolean",
      value: "_",
      defaultValue: "false",
    },
    {
      name: "maxLength",
      desc: "输入框长度限制",
      type: "String",
      value: "数字",
      defaultValue: "_",
    },
    {
      name: "show",
      desc: "是否显示内阴影",
      type: "Boolean",
      value: "_",
      defaultValue: "false",
    },
  ],
};
