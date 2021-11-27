<demo>
禁用
</demo>

<template>
  <div>
    <t-switch v-model="switchDemo3" :disabled="true"></t-switch>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const switchDemo3 = ref(false);
    return { switchDemo3 };
  },
});
</script>

<style scoped>
</style>