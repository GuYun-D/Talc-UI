<template>
  <div class="t-carousel-item">
    <slot></slot>
    {{ name }}
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "t-carousel-item",
  inject: ["name"],
  setup() {
    const visible = ref(false);
    return { visible };
  },
});
</script>

<style scoped>
</style>