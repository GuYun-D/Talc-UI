<template>
  <div class="t-collapse">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "t-collapse",
  setup() {
    return {};
  },
});
</script>

<style scoped lang="scss">
.t-collapse {
  border: 1px solid #ccc;
  border-radius: 4px;

  
}
</style>