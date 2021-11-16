<demo>
评分只读
</demo>

<template>
  <div>
    <t-rate :readonyRate="3.4"></t-rate>
    <t-rate :readonyRate="2.6"></t-rate>
    <t-rate :readonyRate="4.8" starColr="#f40"></t-rate>
    <t-rate :readonyRate="1.5"></t-rate>
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