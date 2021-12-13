<template>
  <div>
    <h1>progress 进度条</h1>
    <t-progress :percentage="40"></t-progress>
    <t-progress :percentage="40" status="warning"></t-progress>
    <t-progress :percentage="40" :textInside="true" status="success"></t-progress>
    <t-progress :percentage="40" status="exception"></t-progress>
    <t-progress :percentage="10" :height="40"></t-progress>
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
