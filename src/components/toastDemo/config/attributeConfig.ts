import type { IAttributeConfig } from "../../../base-ui/attribute/types/types";

export const attributeConfig: IAttributeConfig = {
  attributeTitle: "Toast Attribute",
  attributeItems: [
    {
      name: "position",
      desc: "toast出现的位置",
      type: "string",
      value: "top/middle/bottom",
      defaultValue: "top",
    },
    {
      name: "autoClose",
      desc: "是否自动关闭",
      type: "boolean",
      value: "_",
      defaultValue: "true",
    },
    {
      name: "autoCloseDelay",
      desc: "隔多久自动关闭",
      type: "number",
      value: "_",
      defaultValue: "5(s)",
    },
    {
      name: "closeButton",
      desc: "自定义关闭样式",
      type: "{}",
      value: "_",
      defaultValue: "{text: '关闭',...}",
    },
    {
      name: "enableHtml",
      desc: "是否支持HTML",
      type: "boolean",
      value: "_",
      defaultValue: "false",
    },
    {
      name: "toastHtml",
      desc: "传入的HTML",
      type: "string",
      value: "_",
      defaultValue: "_",
    }
  ]
}