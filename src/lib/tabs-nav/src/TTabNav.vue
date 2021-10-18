<template>
  <div class="t-tab-nav">
    <slot></slot>
    <slot name="actions"></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "t-tab-nav",
  setup() {
    return {};
  },
});
</script>

<style scoped>
</style>