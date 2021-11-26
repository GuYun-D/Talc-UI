<template>
  <div>
    <t-switch v-model="isSwitch"></t-switch>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const isSwitch = ref(false);
    return { isSwitch };
  },
});
</script>

<style scoped>
</style>