<template>
  <div>
    <t-input value="张三"></t-input>
    <t-input value="李四" :disable="true"></t-input>
    <t-input value="王五" disable></t-input>
    <t-input value="麻子" :readonly="true"></t-input>
    <t-input value="错了" error="姓名不能少于五个字"></t-input>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TInput from "../../lib/input/src/TInput.vue";

export default defineComponent({
  components: {
    TInput,
  },
  setup() {
    return {};
  },
});
</script>

<style scoped lang="scss"></style>
