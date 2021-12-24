<demo>
可搜索
</demo>

<template>
  <div>
    <t-select
      v-model="mySelecct5"
      :data="data"
      :clearable="true"
      :searchSelect="true"
    ></t-select>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const mySelecct5 = ref("");
    const data = [
      {
        id: 346748596978,
        value: "html",
        text: "HTML",
      },
      {
        id: 89048596978,
        value: "css",
        text: "CSS",
        disabled: true,
      },
      {
        id: 1458596978,
        value: "javascript",
        text: "JavaScript",
      },
    ];
    return { data, mySelecct5 };
  },
});
</script>
