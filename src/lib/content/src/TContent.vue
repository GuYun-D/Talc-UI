<template>
  <div class="content">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: 't-content',
  setup() {
    return {};
  },
});
</script>

<style scoped>
</style>