<template>
  <svg class="t-icon" style="width: 1em; height: 1em; margin-right: 2px">
    <use :xlink:href="`#ta-${icon}`"></use>
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    icon: {
      type: String,
    },
  },
  setup() {
    return {};
  },
});
</script>

<style scoped lang="scss">
.t-icon {
  width: 1em;
  height: 1em;
}
</style>
