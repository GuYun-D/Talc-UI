<demo>
基本使用
</demo>

<template>
  <div>
    <t-rate v-model="rate1"></t-rate>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    let rate1 = ref(2);
    return { rate1 };
  },
});
</script>

<style scoped>
</style>