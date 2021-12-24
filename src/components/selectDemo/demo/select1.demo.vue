<demo>
基本用法
</demo>

<template>
  <div>
    <t-select v-model="mySelecct1" :data="data"></t-select>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const mySelecct1 = ref("");
    const data = [
      {
        id: 1,
        value: "html",
        label: "HTML",
      },
      {
        id: 2,
        value: "css",
        label: "CSS",
      },
      {
        id: 2,
        value: "javascript",
        label: "JavaScript",
      },
    ];
    return { data, mySelecct1 };
  },
});
</script>
