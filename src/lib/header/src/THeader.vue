<template>
  <div class="t-header">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: 't-header',
  setup() {
    return {};
  },
});
</script>