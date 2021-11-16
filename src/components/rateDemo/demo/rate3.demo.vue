<demo>
默认选中几颗星
</demo>

<template>
  <div>
    <t-rate :num="3"></t-rate>
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

<style scoped>
.t-rate {
  margin: 20px;
}
</style>