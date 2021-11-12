export const carouselAttributeConfig = {
  attributeTitle: "TCarousel Attribute",
  attributeItems: [
    {
      name: "autoplay",
      desc: "是否自动轮播",
      type: "Boolean",
      value: "_",
      defaultValue: "true",
    }, {
      name: "duration",
      desc: "轮播间隔(ms)",
      type: "Number",
      value: "_",
      defaultValue: "3000",
    }, {
      name: "initial",
      desc: "轮播图初次显示哪一张",
      type: "Number",
      value: "_",
      defaultValue: "0",
    }, {
      name: "dot",
      desc: "是否显示指示器",
      type: "Boolean",
      value: "_",
      defaultValue: "true",
    }, {
      name: "director",
      desc: "是否显示切换按钮",
      type: "Boolean",
      value: "_",
      defaultValue: "true",
    }, {
      name: "dotBgColor",
      desc: "当前指示器的背景颜色",
      type: "String",
      value: "_",
      defaultValue: "#法0",
    }, {
      name: "direction",
      desc: "轮播图默认切换方向",
      type: "String",
      value: "next | prev",
      defaultValue: "next",
    }, {
      name: "dotType",
      desc: "指示器类型",
      type: "String",
      value: "circle | rectangle",
      defaultValue: "circle",
    }, {
      name: "trigger",
      desc: "指示器的触发方式",
      type: "String",
      value: "click | hover",
      defaultValue: "click",
    }, {
      name: "carouselDirection",
      desc: "切换方向",
      type: "String",
      value: "transverse | vertical",
      defaultValue: "transverse",
    },  {
      name: "switchType",
      desc: "切换的动画",
      type: "String",
      value: "slide | opacity",
      defaultValue: "slide",
    },
  ]
}