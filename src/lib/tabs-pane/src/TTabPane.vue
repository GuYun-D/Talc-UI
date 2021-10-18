<template>
  <div class="t-tab-pane">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "t-tab-pane",
  setup() {
    return {};
  },
});
</script>

<style scoped>
</style>