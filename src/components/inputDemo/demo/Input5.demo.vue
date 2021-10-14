<demo>
  添加icon
</demo>

<template>
  <div>
    <t-input prefixIcon="31sousuo"></t-input>
    <t-input suffixIcon="delete"></t-input>
    <t-input prefixIcon="31sousuo" suffixIcon="delete"></t-input>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TInput from "../../../lib/input/src/TInput.vue";

export default defineComponent({
  components: {
    TInput,
  },
  setup() {},
});
</script>

<style lang="scss" scoped>
</style>