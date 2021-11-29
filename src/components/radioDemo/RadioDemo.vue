<template>
  <div>
    <h1>radio 单选</h1>
    <t-radio v-model="checked">男</t-radio>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    let checked = ref(true);
    return { checked };
  },
});
</script>

<style scoped>
</style>