<template>
  <div class="t-newCallapse" @click="getCurrentCallapse">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, provide, ref } from "vue";
import TCollapseItem from "../../collapseItem";
import { ICollapseProps } from "./type";
import { checkSlotType } from "../../utils";

export default defineComponent({
  name: "t-collapse",
  emits: ["change-callapse"],
  props: {
    single: {
      type: Boolean,
      default: false,
    },
    selected: String,
  },
  setup(props: ICollapseProps, { slots, emit }) {
    const notAllowNameArr = ref([]);
    const defaults = slots.default();

    checkSlotType(defaults, TCollapseItem, "t-collapse");

    /**
     * 遍历插槽，遍历到不允许操作的项，点击时不做操作
     */
    for (let i = 0; i < defaults.length; i++) {
      if (defaults[i].props.collapseDisabled === "readonly") {
        notAllowNameArr.value.push(defaults[i].props.name);
      }
    }

    const currentCallapseName = ref("");
    const selected = ref(props.selected);

    /**
     * 设置当前展开的面板name
     * 点击总的面板，对事件源对象进行判断，如果含有name属性就设置currentCallapseName
     */
    const getCurrentCallapse = (event: MouseEvent) => {
      let target = event.target as HTMLElement;
      let name = target.getAttribute("name") || undefined;
      if (!name || !props.single || notAllowNameArr.value.includes(name))
        return;
      currentCallapseName.value = name;
      if (props.single) emit("change-callapse", name);
    };

    /**
     * 依赖注入
     */
    provide("currentCallapseName", currentCallapseName);
    provide("selectedName", selected);
    provide("notAllowNameArr", notAllowNameArr);

    return { getCurrentCallapse };
  },
});
</script>

<style scoped lang="scss">
.t-newCallapse {
  border-radius: 4px;
  overflow: hidden;
  border-bottom: 1px solid #ccc;
  margin: 20px;
}
</style>