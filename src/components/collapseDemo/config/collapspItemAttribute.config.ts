import type { IAttributeConfig } from "../../../base-ui/attribute/types/types";

export const collapseItemAttributeConfig: IAttributeConfig = {
  attributeTitle: "CollapseItem Attribute",
  attributeItems: [
    {
      name: "title",
      desc: "collapse标题名称",
      type: "String",
      value: "_",
      defaultValue: "_",
    }, {
      name: "name",
      desc: "collapse得唯一标识",
      type: "String | Number",
      value: "_",
      defaultValue: "required",
    }, {
      name: "collapse-disabled",
      desc: "禁用类型",
      type: "String",
      value: "disabled | hidden",
      defaultValue: "none",
    }
  ],
};
