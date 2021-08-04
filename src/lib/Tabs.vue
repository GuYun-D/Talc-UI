<template>
  <div class="t-tabs">
    <div class="t-tabs-nav" ref="container">
      <div
        class="t-tabs-nav-item"
        v-for="(title, index) in titles"
        :key="index"
        :class="{ selected: title === selected }"
        @click="select(title)"
        :ref="
          (el) => {
            if (title === selected) selectedItem = el;
          }
        "
      >
        {{ title }}
      </div>
      <div class="t-tabs-nav-indicator" ref="indicator"></div>
    </div>
    <div class="t-tabs-content">
      <component
        class="t-tabs-content-item"
        :key="index"
        v-for="(component, index) in defaults"
        :is="component"
        :class="{ selected: component.props.title === selected }"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Tab from "./Tab.vue";
import { computed, onMounted, onUpdated, ref } from "vue";
export default {
  name: "Tabs",
  props: {
    selected: {
      type: String,
    },
  },
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

    /**
     * 显示的Tab
     */
    const current = computed(() => {
      defaults.filter((tag) => {
        tag.props.title === props.selected;
      })[0];
    });

    /**
     * Tab栏切换
     */
    const select = (title: String) => {
      context.emit("update:selected", title);
    };

    /**
     * 为动态渲染出来的dom添加ref
     * :ref="
     *    (el) => {
     *      if (el) navItems[index] = el;
     *    }
     *  "
     */
    const selectedItem = ref<HTMLDivElement>(null);
    const indicator = ref<HTMLDivElement>(null);
    const container = ref<HTMLDivElement>(null);

    const x = () => {
      const { width } = selectedItem.value.getBoundingClientRect();

      indicator.value.style.width = width + "px";

      const { left: left1 } = container.value.getBoundingClientRect();
      const { left: left2 } = selectedItem.value.getBoundingClientRect();
      const left = left2 - left1;
      indicator.value.style.left = left + "px";
    };

    onMounted(x);

    onUpdated(x);

    return {
      container,
      defaults,
      titles,
      current,
      select,
      indicator,
      selectedItem
    };
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
    position: relative;
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

    &-indicator {
      position: absolute;
      height: 3px;
      background: $blue;
      left: 0;
      bottom: -1px;
      width: 100px;
      transition: all 250ms;
    }
  }
  &-content {
    padding: 8px 0;

    &-item {
      display: none;
      &.selected {
        display: block;
      }
    }
  }
}
</style>