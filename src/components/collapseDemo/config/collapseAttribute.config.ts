import type { IAttributeConfig } from "../../../base-ui/attribute/types/types";

export const collapseAttributeConfig: IAttributeConfig = {
  attributeTitle: "Collapse Attribute",
  attributeItems: [
    {
      name: "selected",
      desc: "默认展开",
      type: "String",
      value: "_",
      defaultValue: "_",
    }, {
      name: "single",
      desc: "是否只展开一项",
      type: "Boolean",
      value: "_",
      defaultValue: "false",
    }
  ],
};
