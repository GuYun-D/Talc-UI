export const attributeConfig = {
  attributeTitle: "Rate Attribute",
  attributeItems: [
    {
      name: "num",
      desc: "当前选中第几颗星",
      type: "Numbber",
      value: "_",
      defaultValue: "0",
    },
    {
      name: "size",
      desc: "星星的大小",
      type: "Number",
      value: "_",
      defaultValue: "16",
    },
    {
      name: "starColr",
      desc: "被选中星星的颜色",
      type: "String",
      value: "_",
      defaultValue: "#fbab06",
    },
    {
      name: "auxiliaryTextVisible",
      desc: "是否显示辅助文字",
      type: "Boolean",
      value: "_",
      defaultValue: "false",
    },
    {
      name: "auxiliaryText",
      desc: "辅助文字",
      type: "Array(string)",
      value: "_",
      defaultValue: "['极差', '失望', '一般', '满意', '惊喜']",
    },
    {
      name: "readonyRate",
      desc: "只读评分",
      type: "Number",
      value: "_",
      defaultValue: "_",
    }
  ],
};
