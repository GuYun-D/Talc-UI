<demo>
  支持error信息
</demo>

<template>
  <div>
    <t-input value="表单验证失败" error="请输入用户名"></t-input>
    <t-input value="表单验证失败" :shadow="true" error="请输入用户名"></t-input>
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