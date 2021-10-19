<template>
  <div class="t-tabs">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, getCurrentInstance } from "vue";
import emitter from './tabs'

export default defineComponent({
  name: "t-tabs",
  props: {
    selected: {
      type: String,
      required: true,
    },
    direction: {
      type: String,
      default: "horizontal",
      validator: (value: string) => {
        return ["horizontal", "vertical"].includes(value);
      },
    },
  },
  setup(props, { emit }) {
    // 获取组件实例

    onMounted(() => {
      const instance = getCurrentInstance();
      const tabsChhildren = instance.proxy.$el.children;
      const tabNavCh = tabsChhildren[0].children;

      for (let i = 0; i < tabNavCh.length; i++) {
        let className = tabNavCh[i].classList[0] || "";
        if (className === "t-tab-item") {
          if (tabNavCh[i].getAttribute("name") === props.selected) {
            emitter.emit("update:selected", {
              selected: props.selected,
              el: tabNavCh[i],
            });
          }
        }
      }
    });
    return {};
  },
});
</script>

<style scoped>
</style>