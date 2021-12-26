<template>
  <div>
    <h1>穿梭框</h1>
    <t-transfer v-model="selects" :selectArr="data"></t-transfer>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const selects = ref([]);
    const data = [
      {
        key: 1,
        label: "哈哈哈",
      },
      {
        key: 2,
        label: "嘻嘻嘻",
      },
      {
        key: 3,
        label: "啧啧啧",
      },
    ];
    return { selects, data };
  },
});
</script>

<style scoped>
</style>