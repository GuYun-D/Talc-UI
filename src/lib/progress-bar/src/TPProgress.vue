<template>
  <div class="t-progress">进度条组件</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { EProgressType } from "./types";

export default defineComponent({
  name: "t-progress",
  props: {
    type: {
      type: String,
      default: "line",
      validator: (value: string) => {
        if (EProgressType[value]) return true;
        console.warn(
          "[Progress Component Warning]: The type of progress only supports circle and line"
        );
      },
    },
  },
  setup() {
    return {};
  },
});
</script>

<style scoped lang="scss">
.t-progress {
}
</style>