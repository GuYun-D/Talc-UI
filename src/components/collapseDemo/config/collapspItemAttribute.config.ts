import type { IAttributeConfig } from "../../../base-ui/attribute/types/types";

export const collapseItemAttributeConfig: IAttributeConfig = {
  attributeTitle: "CollapseItem Attribute",
  attributeItems: [
    {
      name: "title",
      desc: "collapse标题名称",
      type: "string",
      value: "_",
      defaultValue: "_",
    }, {
      name: "name",
      desc: "collapse得唯一标识",
      type: "string | Number",
      value: "_",
      defaultValue: "required",
    }, {
      name: "collapse-disabled",
      desc: "禁用类型",
      type: "string",
      value: "disabled | hidden",
      defaultValue: "none",
    }, {
      name: "show-icon",
      desc: "是否展示icon",
      type: "boolean",
      value: "_",
      defaultValue: "false",
    },  {
      name: "icon",
      desc: "icon类名",
      type: "string",
      value: "_",
      defaultValue: "_",
    }
  ],
};
