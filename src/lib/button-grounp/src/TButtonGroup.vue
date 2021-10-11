<template>
  <div class="t-button-group">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TButton from "../../button/src/TButton.vue";

export default defineComponent({
  setup(_, context) {
    const defaults = context.slots.default();
    defaults.forEach((tag) => {
      if (tag.type !== TButton) {
        throw new Error("t-button-group子组件必须是t-button元素");
      }
    });
    return {};
  },
});
</script>

<style scoped lang="scss">
.t-button-group {
  display: inline-flex;
  vertical-align: middle;
  font-size: 0;
  margin: 10px 10px;

  > .t-button {
    margin-left: 0;
    border-radius: 0;

    &:not(:first-child){
      margin-left: -1px;
    }

    &:first-child {
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
    }

    &:last-child {
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
    }

    &:hover {
      position: relative;
      z-index: 1;
    }
  }
}
</style>
