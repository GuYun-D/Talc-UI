import type { IAttributeConfig } from "../../../base-ui/attribute/types/types";

export const attributeConfig: IAttributeConfig = {
  attributeTitle: "Input Attribute",
  attributeItems: [
    {
      name: "imgUrl",
      desc: "图片地址",
      type: "String",
      value: "_",
      defaultValue: "required",
    },
    {
      name: "blank",
      desc: "是否新窗口打开链接",
      type: "Boolean",
      value: "_",
      defaultValue: "true",
    },
    {
      name: "link",
      desc: "为图片添加链接",
      type: "String",
      value: "_",
      defaultValue: "_",
    },
    {
      name: "imgWidth",
      desc: "图片宽度",
      type: "Number",
      value: "_",
      defaultValue: "656",
    },
    {
      name: "imgHeight",
      desc: "图片高度",
      type: "Number",
      value: "_",
      defaultValue: "369",
    },
    {
      name: "magWidth",
      desc: "放大镜宽度",
      type: "Number",
      value: "_",
      defaultValue: "100",
    },
    {
      name: "magHeight",
      desc: "放大镜高度",
      type: "Number",
      value: "_",
      defaultValue: "100",
    },
    {
      name: "imgAlt",
      desc: "图片的alt属性",
      type: "String",
      value: "_",
      defaultValue: "_",
    },
    {
      name: "radius",
      desc: "圆角放大镜",
      type: "Boolean",
      value: "_",
      defaultValue: "false",
    }
  ],
};