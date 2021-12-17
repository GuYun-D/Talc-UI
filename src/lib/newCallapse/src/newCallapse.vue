<template>
  <div class="t-newCallapse">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, provide } from "vue";

export default defineComponent({
  name: "t-newCallapse",
  setup(props, { slots }) {
    const defaults = slots.default();

    return {};
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