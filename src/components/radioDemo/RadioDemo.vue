<template>
  <div>
    <h1>radio 单选</h1>
    <div>
      <t-radio v-model="checked" :option="option"></t-radio>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    let checked = ref();

    const option = {
      label: "男",
      value: "male",
    };

    return { checked, option };
  },
});
</script>

<style scoped>
</style>