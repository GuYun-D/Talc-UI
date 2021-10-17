import type { IAttributeConfig } from "../../../base-ui/attribute/types/types";

export const attributeConfig: IAttributeConfig = {
  attributeTitle: "Input Attribute",
  attributeItems: [
    {
      name: "position",
      desc: "toast出现的位置",
      type: "String",
      value: "top/middle/bottom",
      defaultValue: "top",
    },
    {
      name: "visible",
      desc: "控制toast的显示隐藏",
      type: "Boolean",
      value: "_",
      defaultValue: "false",
    },
    {
      name: "autoClose",
      desc: "是否自动关闭",
      type: "Boolean",
      value: "_",
      defaultValue: "false",
    },
    {
      name: "autoCloseDelay",
      desc: "隔多久自动关闭",
      type: "Number",
      value: "_",
      defaultValue: "3(s)",
    },
    {
      name: "closeButton",
      desc: "自定义关闭样式",
      type: "Object",
      value: "_",
      defaultValue: "{text: '关闭',...}",
    },
    {
      name: "enableHtml",
      desc: "是否支持HTML",
      type: "Boolean",
      value: "_",
      defaultValue: "false",
    },
  ]
}