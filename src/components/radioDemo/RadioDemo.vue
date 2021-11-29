<template>
  <div>
    <h1>radio 单选</h1>
    <t-radio v-model="checked">男</t-radio>

    <t-radio v-model="checked2" size="big" :disabled="true">男</t-radio>

    <t-radio v-model="checked3" size="small" :disabled="true">男</t-radio>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    let checked = ref(false);
    let checked2 = ref(true);
    let checked3 = ref(true);
    return { checked, checked2, checked3 };
  },
});
</script>

<style scoped>
</style>