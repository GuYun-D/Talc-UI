<template>
  <div>
    <component :is="defaults[0]" />
    <component :is="defaults[1]" />
  </div>
</template>

<script lang="ts">
import Tab from "./Tab.vue";
export default {
  name: "Tabs",
  setup(props, context) {
    /**
     * defaults就是关于子组件的信息 类型是一个数组，每个元素就是Tabs子组件的信息
     * 利用这个信息可以对子组件的类型进行判断，规定用户使用1正确的组件
     * 每一条信息 === 子组件Tab
     */
    const defaults = context.slots.default();

    defaults.forEach((tag) => {
      if (tag.type !== Tab) {
        throw new Error("Tabs子组件必须是Tab");
      }
    });
    return { defaults };
  },
};
</script>

<style lang="scss">
</style>