<template>
  <div class="t-tab-content">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "t-tab-content",
  setup() {
    return {};
  },
});
</script>

<style scoped>
</style>