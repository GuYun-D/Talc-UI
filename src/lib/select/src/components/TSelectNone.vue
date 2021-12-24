<template>
  <div class="t-select-none">
    -- no data --
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style scoped lang="scss">
.t-select-none {
  width: 100%;
  padding: 10px;
  text-align: center;
  color: rgb(155, 155, 155);
}
</style>