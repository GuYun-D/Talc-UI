<demo>
  设置步长
</demo>

<template>
  <div>
    <t-input-number v-model="mySelect2" :step="3"></t-input-number>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const mySelect2 = ref(0);
    return { mySelect2 };
  },
});
</script>
