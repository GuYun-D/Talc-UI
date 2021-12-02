<demo>
尺寸大小
</demo>

<template>
  <div>
    <t-radio :option="option1" size="small"></t-radio>
    <t-radio :option="option2"></t-radio>
    <t-radio :option="option3" size="big"></t-radio>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const option1 = {
      label: "小",
      value: "small",
    };
    const option2 = {
      label: "正常",
      value: "normal",
    };
    const option3 = {
      label: "大",
      value: "big",
    };
    return { option1, option2, option3 };
  },
});
</script>

<style scoped>
.t-radio {
  margin: 0 15px;
}
</style>