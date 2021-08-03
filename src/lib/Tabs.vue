<template>
  <div class="t-tabs">
    <div class="t-tabs-nav">
      <div
        class="t-tabs-nav-item"
        v-for="(title, index) in titles"
        :key="index"
      >
        {{ title }}
      </div>
    </div>
    <div class="t-tabs-content">
      <component
      class="t-tabs-content-item"
        :key="index"
        v-for="(component, index) in defaults"
        :is="component"
      />
    </div>
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

    /**
     * Tab组件传递过来的title属性是要显示到上面的切换栏的，使用map获取到所有的title
     */
    const titles = defaults.map((tag) => {
      return tag.props.title;
    });

    return { defaults, titles };
  },
};
</script>

<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;
.t-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    &-item {
      padding: 8px 0 !important;
      margin: 0 16px !important;
      cursor: pointer;
      &:first-child {
        margin-left: 0 !important;
      }
      &.selected {
        color: $blue;
      }
    }
  }
  &-content {
    padding: 8px 0;
  }
}
</style>