<demo>
禁用选项
</demo>

<template>
  <div>
    <t-select v-model="mySelecct2" :data="data"></t-select>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const mySelecct2 = ref("");
    const data = [
      {
        id: 65748596978,
        value: "html",
        
        label: "HTML",
      },
      {
        id: 657485969348,
        value: "css",
        
        label: "CSS",
        disabled: true,
      },
      {
        id: 657647596978,
        value: "javascript",
        
        label: "JavaScript",
      },
    ];
    return { data, mySelecct2 };
  },
});
</script>
