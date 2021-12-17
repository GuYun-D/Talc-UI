<template>
  <div class="t-newCallapse" @click="getCurrentCallapse">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, provide, reactive, ref, toRefs } from "vue";

export default defineComponent({
  name: "t-newCallapse",
  props: {
    single: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { slots }) {
    const defaults = slots.default();

    const currentCallapseName = ref("");

    /**
     * 设置当前展开的面板name
     * 点击总的面板，对事件源对象进行判断，如果含有name属性就设置currentCallapseName
     */
    const getCurrentCallapse = (event: MouseEvent) => {
      let target = event.target as HTMLElement;
      let name = target.getAttribute("name") || undefined;
      if (!name || !props.single) return;
      currentCallapseName.value = name;
    };

    provide("currentCallapseName", currentCallapseName);

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