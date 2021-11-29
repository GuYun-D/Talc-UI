<demo>
select禁用
</demo>

<template>
  <div>
    <t-select v-model="mySelecct3" :data="data" :disabled="true"></t-select>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const mySelecct3 = ref("");
    const data = [
      {
        id: 657234596978,

        value: "html",
        text: "HTML",
      },
      {
        id: 657487896978,

        value: "css",
        text: "CSS",
        disabled: true,
      },
      {
        id: 6574812396978,
        value: "javascript",
        text: "JavaScript",
      },
    ];
    return { data, mySelecct3 };
  },
});
</script>
