<demo>
可清除选项
</demo>

<template>
  <div>
    <t-select v-model="mySelecct4" :data="data" :clearable="true"></t-select>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const mySelecct4 = ref("");
    const data = [
      {
        id: 256748596978,
        value: "html",
        text: "HTML",
      },
      {
        id: 890748596978,
        value: "css",
        text: "CSS",
        disabled: true,
      },
      {
        id: 25678596978,
        value: "javascript",
        text: "JavaScript",
      },
    ];
    return { data, mySelecct4 };
  },
});
</script>
