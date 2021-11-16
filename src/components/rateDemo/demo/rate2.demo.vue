<demo>
自定义大小
</demo>

<template>
  <div>
    <t-rate :size="14"></t-rate>
    <t-rate :size="18"></t-rate>
    <t-rate :size="22" starColr="#f40"></t-rate>

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
.t-rate{
  margin: 20px;
}
</style>