<template>
  <div class="t-footer">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: 't-footer',
  setup() {
    return {};
  },
});
</script>