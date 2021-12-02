export const radioPropsConfig = {
  attributeTitle: "Radio Attribute",
  attributeItems: [
    {
      name: "v-model",
      desc: "选中时绑定",
      type: "any",
      value: "_",
      defaultValue: "_",
    }, {
      name: "disabled",
      desc: "是否禁用",
      type: "Boolean",
      value: "_",
      defaultValue: "false",
    }, {
      name: "size",
      desc: "单选尺寸大小",
      type: "String",
      value: "small|normal|big",
      defaultValue: "small",
    }, {
      name: "active-color",
      desc: "选中时单选颜色",
      type: "String",
      value: "_",
      defaultValue: "#00cb51",
    }, {
      name: "option",
      desc: "配置对象",
      type: "{label: any, value: any}",
      value: "_",
      defaultValue: "required",
    }, {
      name: "border",
      desc: "是否带边框",
      type: "Boolean",
      value: "_",
      defaultValue: "false",
    },
  ]
}

export const radioGroupPropsConfig = {
  attributeTitle: "RadioGroup Attribute",
  attributeItems: [
    {
      name: "v-model",
      desc: "当前选中的值",
      type: "any",
      value: "_",
      defaultValue: "_",
    }, {
      name: "vertical",
      desc: "按钮竖向排列",
      type: "Boolean",
      value: "_",
      defaultValue: "false",
    }, {
      name: "radioType",
      desc: "按钮样式",
      type: "String",
      value: "button|normal",
      defaultValue: "normal",
    }
  ]
}