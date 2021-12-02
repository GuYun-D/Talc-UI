<demo>
  基本使用
</demo>

<template>
  <div class="demo-1">
    <t-radio v-model="radio1" :option="option"></t-radio>

    <t-radio v-model="radio2" :option="option1" active-color="blue"></t-radio>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const radio1 = ref("");
    const radio2 = ref("");
    const option = {
      label: "基本用法",
      value: "base",
    };

    const option1 = {
      label: "可配置选中颜色",
      value: "color",
    };
    return {
      radio1,
      option,
      option1,
      radio2,
    };
  },
});
</script>

<style scoped lang="scss">
.demo-1{
  .t-radio{
    margin: 0 20px;
  }
}
</style>