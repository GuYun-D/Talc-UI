<demo>
  禁用的
</demo>

<template>
  <div>
    <t-input-number v-model="mySelect1" :disabled="true"></t-input-number>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const mySelect1 = ref(0);
    return { mySelect1 };
  },
});
</script>
