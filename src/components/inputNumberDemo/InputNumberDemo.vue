<template>
  <div>
    <t-input-number v-model="number" :disabled="true"></t-input-number>
    当前值： {{ number }}
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const number = ref(0);
    return { number };
  },
});
</script>

<style scoped>
</style>