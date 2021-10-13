<demo>
  支持size属性
</demo>

<template>
  <div>
    <t-input value="大输入框" size="big" prefixIcon="31sousuo" suffixIcon="delete"></t-input>
    <t-input value="正常输入框" prefixIcon="31sousuo" suffixIcon="delete"></t-input>
    <t-input value="小输入框" prefixIcon="31sousuo" suffixIcon="delete" size="mini"></t-input>
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