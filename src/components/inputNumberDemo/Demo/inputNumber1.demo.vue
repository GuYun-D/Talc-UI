<demo>
  基本使用
</demo>

<template>
  <div>
    <t-input-number v-model="mySelect"></t-input-number>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const mySelect = ref(0);
    return { mySelect };
  },
});
</script>