<demo>
基本用法
</demo>

<template>
  <div>
    <t-switch v-model="switchDemo1"></t-switch>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const switchDemo1 = ref(false);
    return { switchDemo1 };
  },
});
</script>

<style scoped>
</style>