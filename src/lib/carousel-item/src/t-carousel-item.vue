<template>
  <div class="t-carousel-item">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "t-carousel-item",
  setup() {
    return {  };
  },
});
</script>

<style scoped>
</style>