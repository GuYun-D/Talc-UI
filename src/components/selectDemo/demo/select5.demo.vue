<demo>
可搜索
</demo>

<template>
  <div>
    <t-select
      v-model="mySelecct"
      :data="data"
      :clearable="true"
      :search-data="true"
    ></t-select>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const mySelecct = ref("");
    const data = [
      {
        value: "html",
        text: "HTML",
      },
      {
        value: "css",
        text: "CSS",
        disabled: true,
      },
      {
        value: "javascript",
        text: "JavaScript",
      },
    ];
    return { data, mySelecct };
  },
});
</script>
