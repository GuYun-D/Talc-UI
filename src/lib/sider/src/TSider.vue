<template>
  <div class="t-sider">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: 't-sider',
  setup() {
    return {};
  },
});
</script>