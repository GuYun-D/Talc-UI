<template>
  <div class="t-content">
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

<style scoped lang="scss">
.t-content{
  flex-grow: 1;
}
</style>